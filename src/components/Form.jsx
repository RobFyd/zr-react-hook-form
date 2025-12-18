import { useForm } from "react-hook-form";

import "./Form.css";

export function Form({ onAddPerson }) {
  const form = useForm();

  const nameField = form.register("name");

  return (
    <>
      <h1>Formularz dodawania osoby:</h1>
      <form autoComplete="off">
        <label htmlFor="name">Imię</label>
        <input
          id="name"
          name={nameField.name}
          onBlur={nameField.onBlur}
          onChange={nameField.onChange}
          ref={nameField.ref}
        />

        <label htmlFor="age">Wiek</label>
        <input id="age" type="number" />

        <label htmlFor="tel">Telefon</label>
        <input id="tel" type="tel" />

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" />

        <label htmlFor="isInvoiceRequired">
          <input
            id="isInvoiceRequired"
            type="checkbox"
            placeholder="Podaj NIP"
          />
          Faktura VAT
        </label>
        <input id="nip" />

        <div className="footer">
          <button>Dodaj</button>
        </div>
      </form>
    </>
  );
}
