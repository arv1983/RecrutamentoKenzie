import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import { User } from "../../providers/UserProvider";

const UpProfileDev = () => {
  const { id } = User();

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  const schema = yup.object().shape({
    city: yup.string().max(20),
    have_job: yup.boolean("The value must be boolean").nullable(),
    avaliable_job: yup.boolean("The value must be boolean").nullable(),
    quarter: yup.string().max(1),
    social_medias: yup.string().max(25),
    cellPhone: yup.string().max(12),
    softSkills: yup.string(),
    description: yup.string().max(400),
    is_coach: yup.boolean("The value must be boolean").nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (data) => {
    api
      .patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    reset();
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div>
            <input {...register("name")} placeholder="Nome" />
          </div>

          <div>
            <input {...register("city")} placeholder="Cidade" />
          </div>

          <div>
            <span>Você possui emprego?</span>
            <input {...register("have_job")} type="radio" value="Empregado" />
            <label>Empregado</label>
            <input
              {...register("have_job")}
              type="radio"
              value="Desempregado"
            />
            <label>Desempregado</label>
          </div>

          <div>
            <span>Você está disponível para trabalhar?</span>
            <input
              {...register("avaliable_job")}
              type="radio"
              value="Disponivel"
            />
            <label>Disponível</label>
            <input
              {...register("avaliable_job")}
              type="radio"
              value="NaoDisponivel"
            />
            <label>Não Disponível</label>
          </div>

          <div>
            <input {...register("quarter")} placeholder="Período" />
          </div>

          <div>
            <input {...register("social_medias")} placeholder="Midia Social" />
          </div>

          <div>
            <input {...register("cellPhone")} placeholder="Celular" />
          </div>

          <div>
            <input {...register("softSkills")} placeholder="SoftSkills" />
          </div>

          <div>
            <input {...register("description")} placeholder="Descrição" />
          </div>

          <div>
            <span>Você é coach?</span>
            <input {...register("is_coach")} type="radio" value="false" />
            <label>Sou coach</label>
            <input {...register("is_coach")} type="radio" value="true" />
            <label>Não sou coach</label>
          </div>

          <div>
            <button type="submit">Enviar </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default UpProfileDev;
