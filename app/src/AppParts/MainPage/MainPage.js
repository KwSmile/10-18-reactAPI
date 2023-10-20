import { useEffect, useState } from "react"
import { NavLink, Route, Routes } from 'react-router-dom'


export default function MainPage() {




    return (
        <div>
            <h1>In an Inn</h1>

        </div>

    )
}

// API nuoroda: https://jsonplaceholder.typicode.com

// 1. Sukurti vartotojų puslapį (users), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user puslapį.
//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.

// 2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//   2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post.html puslapį.
//   2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user.html puslapį.
//   2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.

// 3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas.
//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda.

// 5. Sukurti naują puslapį use, kuriame bus atvaizduojama vartotojo informacija:
//   5.1. Pilnas vardas.
//   5.2. Vartotojo vardas / nick'as.
//   5.3. El. paštas.
//   5.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//   5.5. Telefono numeris.
//   5.6. Internetinio puslapio adresas.
//   5.7. Įmonės, kurioje dirba, pavadinimas.

// 6. Šiame puslapyje (use) turi būti atvaizduojama:
//   6.1. Visi vartotojo parašyti įrašai (posts). Kiekvienas post'as turi turėti nuorodą.
//   6.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės pavadinimą, kuris turi būti nuoroda.

// 7. Sukurti naują puslapį post.html ir jame atvaizduoti:
//   7.1. Įrašo (post) pavadinimą.
//   7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
//   7.3. Įrašo turinį.
//   7.4. Įrašo komentarus. Kiekvienas komentaras turi:
//     7.4.1. Komentaro pavadinimą.
//     7.4.2. Komentaro turinį - pastraipą.
//     7.4.3. Komentarą parašiusio asmens el. pašto adresą.
//   7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į puslapį posts.html. Jame vėliau bus atvaizduojami visi šio vartotojo įrašai.

// 8. Sukurti naują puslapį album.html ir jame atvaizduoti:
//   8.1. Albumo pavadinimą.
//   8.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
//   8.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
//     8.3.1. https://photoswipe.com/
//     8.3.2. https://nanogallery2.nanostudio.org/
//     8.3.3. https://sachinchoolur.github.io/lightgallery.js/
//     8.3.4. Arba bet kurią kitą.
