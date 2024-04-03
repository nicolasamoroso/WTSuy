import React, { useState, useRef } from "react";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import TextArea from "@/components/form/textarea";
import { Movie } from "@/types/movies";
import { BorderButton, TransparentButton } from "@/components/button/button";
import "@/components/form/form.css";

const Form = ({ movies }: { movies: Movie[] }) => {
  const [formData, setFormData] = useState({
    movie: movies[0].title,
    name: "",
    email: "",
    review: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const reviewTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (hasSubmitted) validateField(name, value);
  };

  const refreshForm = () => {
    setFormData({ movie: "", name: "", email: "", review: "" });
    nameInputRef.current?.classList.remove("error");
    emailInputRef.current?.classList.remove("error");
    reviewTextAreaRef.current?.classList.remove("error");
    setHasSubmitted(false);
  };

  const validateField = (fieldName: string, value: string) => {
    switch (fieldName) {
      case "name":
        if (value.length < 3) nameInputRef.current?.classList.add("error");
        else nameInputRef.current?.classList.remove("error");

        break;
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value))
          emailInputRef.current?.classList.add("error");
        else emailInputRef.current?.classList.remove("error");

        break;
      case "review":
        if (value.length < 9) reviewTextAreaRef.current?.classList.add("error");
        else reviewTextAreaRef.current?.classList.remove("error");

        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setHasSubmitted(true);
    for (const key in formData) {
      validateField(key, formData[key as keyof typeof formData]);
    }

    if (
      nameInputRef.current?.classList.contains("error") ||
      emailInputRef.current?.classList.contains("error") ||
      reviewTextAreaRef.current?.classList.contains("error")
    ) {
      return;
    }

    refreshForm();

    const data = {
      name: formData.name,
      movie: formData.movie,
    };

    localStorage.setItem("review", JSON.stringify(data));
    window.location.href = "/thanks";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Select
          name="movie"
          movies={movies}
          label="Seleccione película"
          value={formData.movie}
          onChange={handleChange}
        />
        <div>
          <Input
            type="text"
            name="name"
            label="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            inputRef={nameInputRef}
          />
          <span className="name-error">
            Por favor ingrese un nombre con más de 3 caracteres.
          </span>
        </div>
        <div>
          <Input
            type="email"
            name="email"
            label="E-mail"
            value={formData.email}
            onChange={handleChange}
            inputRef={emailInputRef}
          />
          <span className="name-error">Por favor ingrese un email válido.</span>
        </div>
        <div>
          <TextArea
            name="review"
            label="Reseña"
            value={formData.review}
            onChange={handleChange}
            textAreaRef={reviewTextAreaRef}
          />
          <span className="name-error">
            Por favor ingrese una reseña con más de 10 caracteres.
          </span>
        </div>
        <div className="btn-container">
          <BorderButton type="submit">Finalizar</BorderButton>
          <TransparentButton type="button" onClick={refreshForm}>
            Reiniciar
          </TransparentButton>
        </div>
      </form>
    </>
  );
};

export default Form;
