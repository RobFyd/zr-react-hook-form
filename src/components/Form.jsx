import { useForm } from "react-hook-form";

import "./Form.css";

export function Form({ onAddPerson }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    onAddPerson(data);
  }

  return (
    <>
      <h1>Formularz dodawania osoby:</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <label htmlFor="name">Imię</label>
        <input
          id="name"
          {...register("name", {
            required: "To pole jest wymagane",
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <label htmlFor="age">Wiek</label>
        <input
          id="age"
          type="number"
          {...register("age", {
            valueAsNumber: true,
            required: "To pole jest wymagane",
            min: { value: 18, message: "Minimalny wiek to 18 lat" },
            max: { value: 120, message: "Maksymalny wiek to 120 lat" },
          })}
        />
        {errors.age && <span className="error">{errors.age.message}</span>}

        <label htmlFor="tel">Telefon</label>
        <input
          id="tel"
          type="tel"
          {...register("tel", {
            required: "To pole jest wymagane",
            pattern: {
              value: /^[+][0-9]{9,15}$/,
              message: "Nieprawidłowy format numeru telefonu",
            },
          })}
        />
        {errors.tel && <span className="error">{errors.tel.message}</span>}

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "To pole jest wymagane",
            validate: (email) =>
              email.includes("@") || "Nieprawidłowy format adresu e-mail",
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

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
