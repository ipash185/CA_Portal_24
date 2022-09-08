import { useState } from "react";
import axios from "axios"

function useForm({ form, additionalData, endpointUrl }) {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (form) {
      e.preventDefault();
      setStatus("loading");
      setMessage("");

      const finalFormEndpoint = endpointUrl || form.action;
      const data = Array.from(form.elements)
        .filter((input) => input.name)
        .reduce(
          (obj, input) => Object.assign(obj, { [input.name]: input.value }),
          {}
        );

      if (additionalData) {
        Object.assign(data, additionalData);
      }

      console.log(data);


      axios.post("http://localhost:5000/signup", data).then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      }).catch((err) => {
        setMessage(err.toString());
        setStatus("error");
      })


    }
  };

  return { handleSubmit, status, message };
}

export default useForm;