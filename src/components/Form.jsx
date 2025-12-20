import { useForm } from "react-hook-form";

import "./Form.css";

export function Form({ onAddPerson }) {
  const { register, handleSubmit, formState } = useForm();

  function onSubmit(data) {
    console.log(data);
    onAddPerson(data);
  }

  return (
    <>
      <h1>Formularz dodawania osoby:</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label htmlFor="name">Imię</label>
        <input id="name" {...register("name", { required: true })} />
        {formState.errors.name && (
          <span className="error">To pole jest wymagane</span>
        )}

        <label htmlFor="age">Wiek</label>
        <input
          id="age"
          type="number"
          {...register("age", {
            valueAsNumber: true,
            required: true,
            min: 18,
            max: 120,
          })}
        />
        {formState.errors.age && (
          <span className="error">To pole jest wymagane</span>
        )}

        <label htmlFor="tel">Telefon</label>
        <input id="tel" type="tel" {...register("tel")} />

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" {...register("email")} />

        {/* <label htmlFor="isInvoiceRequired">
          <input
            id="isInvoiceRequired"
            type="checkbox"
            placeholder="Podaj NIP"
          />
          Faktura VAT
        </label>
        <input id="nip" /> */}

        <div className="footer">
          <button>Dodaj</button>
        </div>
      </form>
    </>
  );
}
