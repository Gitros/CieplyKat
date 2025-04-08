const Contact = () => {
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

        <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Imię i nazwisko
              </label>
              <input
                type="text"
                placeholder="Jan Kowalski"
                className="text-black w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="jan@example.com"
                className="text-black w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Temat
            </label>
            <input
              type="text"
              placeholder="Zapytanie o ocieplenie"
              className="text-black w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Wiadomość
            </label>
            <textarea
              rows={5}
              placeholder="Tutaj wpisz swoją wiadomość..."
              className="text-black w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
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
