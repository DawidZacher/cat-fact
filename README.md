# Aplikacja Cat Facts

Prosta aplikacja oparta na Angular, która wyświetla losowe ciekawostki o kotach z mechanizmem doczytywania podczas scrollowania. <br /><br />
Wersja live preview jest dostępna pod linkiem <a href="https://cat-fact-app2024.netlify.app/login" target="_blank">https://cat-fact-app2024.netlify.app</a>.

## **Informacje o projekcie**

Aplikacja składa się z dwóch ekranów:

- Ekran logowania: prosty formularz logowania po stronie klienta, obejmujący walidację wprowadzonych danych
- Ekran faktów o kotach: mozliwosc przejścia dopiero po zalogowaniu, podczas scrollowania dane będą się doczytywać automatycznie, uwzględniając walidację powtórzonych ciekawostek.

## Tech stack

- Angular v18
- ngx-infinite-scroll
- .husky

## **Instalacja**

1. **Sklonuj repozytorium**:
   ```bash
   git clone https://github.com/DawidZacher/cat-fact.git
   cd cat-fact
   ```
2. **Zainstaluj node_modules**:
   ```bash
   npm install
   ```
3. **Uruchomienie aplikacji**
   ```bash
   npm run start
   ```
   Projekt otworzy się automatyczniena porcie 4200.

## **Testy**

**Aby uruchomić testy jednostkowe skorzystaj z polecenia**:

```bash
npm run test
```
