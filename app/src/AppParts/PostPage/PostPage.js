import { useEffect, useState } from "react"
import { Link, Route, Routes } from 'react-router-dom'


export default function PostPage() {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments')
            const apiData = await res.json()
            setData(apiData)

        }

        getData()

    }, [])
    // console.log(data)

    const listElement = (
        <ul>
            {data && data.map((obj, i) => (
                <li key={obj.id}>
                    <Link to={`/posts/${obj.id}`}>
                        {obj.title}

                    </Link>
                    <span>{obj.comments.length}</span>


                </li>

            ))}
        </ul>
    )

    return (
        <div>

            <h3>Posts Page</h3>


            {listElement}



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