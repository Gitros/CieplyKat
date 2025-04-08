Profesjonalne menu wg. wytycznych podanych na wykładzie.

### Funkcje:

- Routing do podstron (`react-router-dom`)
- Stylowanie z Tailwindem
- Burger menu z animacją (`framer-motion`)
- Automatyczne zamykanie menu po kliknięciu

# Home

### Zawiera:

- Nagłówek z nazwą firmy
- Krótki opis działania projektu
- Ilustracja logo (`logo.png`)
- Przycisk CTA prowadzący do sekcji "O nas"

# LAYOUT

### Zawiera:

- Górny pasek nawigacyjny (`Navbar`)
- Główną treść (`<Outlet />` z React Router)
- Dolną stopkę (`Footer`)
- Spójne stylowanie na wszystkich podstronach

# PODSTRONY

| Ścieżka         | Komponent          | Opis                                                 |
| --------------- | ------------------ | ---------------------------------------------------- |
| `/`             | `Home.tsx`         | Strona główna z banerem, nagłówkiem, opisem i CTA    |
| `/about`        | `About.tsx`        | Informacje o firmie, ikony                           |
| `/services`     | `Services.tsx`     | Szczegółowa oferta z grafikami i animacjami          |
| `/realizations` | `Realizations.tsx` | Portfolio / galeria wykonanych realizacji            |
| `/contact`      | `Contact.tsx`      | Formularz kontaktowy z walidacją                     |
| `/faq`          | `Faq.tsx`          | Najczęściej zadawane pytania z rozwijaną odpowiedzią |
| `/opinions`     | `Reviews.tsx`      | Opinie klientów w formie kart z avatarami            |

# FUNKCJONALNOSC

### Walidacja formularza kontaktowego (`react-hook-form`)

- Zastosowano bibliotekę `react-hook-form` do obsługi formularza (`Contact.tsx`)
- Walidacja pól: wymagane imię, poprawny email, temat i wiadomość
- Błędy pojawiają się pod odpowiednimi polami w formie czerwonego tekstu

### Animacje z użyciem `Framer Motion`

- Animowane wejście sekcji na stronie głównej i podstronach (`Home.tsx`, `Services.tsx`, `Navbar.tsx`)
- Płynne rozwijanie mobilnego menu (burger menu)
- Animacja przewijania i pojawiania się treści w widoku (`whileInView`, `initial`, `animate`)

Nie mogę zrobić zrzutów wszystkich animacji.
