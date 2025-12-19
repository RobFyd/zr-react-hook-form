import { useForm } from "react-hook-form";

import "./Form.css";

export function Form({ onAddPerson }) {
  const { register, getValues } = useForm();

  function onSubmit(e) {
    e.preventDefault();
    const formValues = getValues();
    console.log(formValues);
  }

  return (
    <>
      <h1>Formularz dodawania osoby:</h1>
      <form onSubmit={onSubmit} autoComplete="off">
        <label htmlFor="name">Imię</label>
        <input id="name" {...register("name")} />

        <label htmlFor="age">Wiek</label>
        <input
          id="age"
          type="number"
          {...register("age", { valueAsNumber: true })}
        />

        <label htmlFor="tel">Telefon</label>
        <input id="tel" type="tel" {...register("tel")} />

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" {...register("email")} />

        <label htmlFor="isInvoiceRequired">
          <input
            id="isInvoiceRequired"
            type="checkbox"
            placeholder="Podaj NIP"
          />
          Faktura VAT
        </label>
        <input id="nip" {...register("nip")} />

        <div className="footer">
          <button>Dodaj</button>
        </div>
      </form>
    </>
  );
}
