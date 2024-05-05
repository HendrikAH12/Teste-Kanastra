"use client"

import Button from "@/components/Button";
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from "../services/toastifyService";
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  governmentId: string;
  email: string;
  debtAmount: number;
  debtDueDate: string;
}

export default function CreateCharge() {
  const createCharge = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    const formDataObject: FormData = {
      name: formData.get('name') as string || '',
      governmentId: formData.get('governmentId') as string || '',
      email: formData.get('email') as string || '',
      debtAmount: Number(formData.get('debtAmount')) || 0,
      debtDueDate: formData.get('debtDueDate') as string || ''
    };

    try {
      const response = await fetch('http://localhost:8000/charges', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formDataObject)
      });
  
      if (response.ok) {
        notifySuccess("Charge successfully created");
      } else {
        notifyError("Error creating charge");
      }
    } catch (error) {
      notifyError("Error creating charge");
    }
  };

  return (
    <>
      <ToastContainer
        className="relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-left"
        autoClose={5000}
      />

      <div className="flexCenter pt-14">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md flex flex-col gap-4"
          onSubmit={createCharge}
        >
          <div>
            <label className="form_label">Name</label>
            <input className="form_input focus:outline-none focus:shadow-outline"
              type="text" name="name" placeholder="Name"
            />
          </div>

          <div>
            <label className="form_label">Government Id</label>
            <input className="form_input focus:outline-none focus:shadow-outline"
              type="text" name="governmentId" placeholder="Government Id"
            />
          </div>

          <div>
            <label className="form_label">E-mail</label>
            <input className="form_input focus:outline-none focus:shadow-outline"
              type="email" name="email" placeholder="E-mail"
            />
          </div>

          <div>
            <label className="form_label">Debt Amount</label>
            <input className="form_input focus:outline-none focus:shadow-outline"
              type="number" name="debtAmount" min="0" placeholder="Debt Amount"
            />
          </div>

          <div>
            <label className="form_label">Debt due Date</label>
            <input className="form_input focus:outline-none focus:shadow-outline"
              type="date" name="debtDueDate"
            />
          </div>

          <Button type="submit" title="Save" variant="btn_green"/>
        </form>
      </div>
    </>
  );
}
