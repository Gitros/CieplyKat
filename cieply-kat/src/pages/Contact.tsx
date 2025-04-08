import { useForm } from "react-hook-form";

type ContactFormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log("Dane z formularza:", data);
    reset();
  };

  return (
    <section className="min-h-[calc(100vh-64px)] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Skontaktuj się z nami
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Masz pytania lub chcesz umówić się na bezpłatną wycenę? Wypełnij
          formularz, a my się z Tobą skontaktujemy!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Imię i nazwisko
              </label>
              <input
                {...register("name", { required: "To pole jest wymagane." })}
                type="text"
                placeholder="Jan Kowalski"
                className="text-black w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email jest wymagany.",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Nieprawidłowy adres email.",
                  },
                })}
                type="email"
                placeholder="jan@example.com"
                className="text-black w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Temat
            </label>
            <input
              {...register("subject", { required: "Temat jest wymagany." })}
              type="text"
              placeholder="Zapytanie o ocieplenie"
              className="text-black w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Wiadomość
            </label>
            <textarea
              {...register("message", { required: "Wiadomość jest wymagana." })}
              rows={5}
              placeholder="Tutaj wpisz swoją wiadomość..."
              className="text-black w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-400 text-white font-medium rounded-md hover:bg-orange-500 transition cursor-pointer"
            >
              Wyślij wiadomość
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
