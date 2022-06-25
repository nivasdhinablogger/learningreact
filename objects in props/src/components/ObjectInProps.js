import React, { useState } from 'react'
import "./App.css"

function ObjectInProps() {
  let students=[{
    name: "nivas",
    pic:  ""
  },{
    name: "Priya",
    pic:  "data:image/jpeg;base64,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"
  },{
    name: "Ria",
    pic:  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgVEhUYGBgYGBgYEhgYGBEYGBIYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQhISE0NDQxNDQ0NDExNDQ0NDE0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ/PzQxNDQ0Pz8xMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAD4QAAIBAgMFBQYFAgYBBQAAAAECAAMRBBIhBTFBUWEicYGRoQYTMrHB0UJSYoLwcuEHFDOSovGyI0NzwtL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQMCBAUG/8QAIxEAAwEAAgMAAQUBAAAAAAAAAAECEQMxEiFBBBMyUWFxIv/aAAwDAQACEQMRAD8ApWiAjrQzrZwIYRIcRWCAkm3fH4mqEUsdwnIbU2i1RrDQD+eclVYWiPJk20drsxK07gc+J75lMSdSbxAQEyLenZMqViFujS0RgtAYc0erHrAg5eccWA43PQff7RANZuUaWPOEi+o+n0jDGhF3CbTqUz2WJH5TqJ0+zNpJWGmjDev1HOcWBJsPUKMGU2I3GbVYTrjVHf2hyyhszHe8XX4h8Q+vdNCVl6clS08Y20VobRTZgaRBaOijENywZY+CAgWgjoIAC0NoooBoCILQ3gJgALRRRRgWgIGktpQ2rihTQtx4d8lTKzO+jC2/jrtkU6Df38ZhAQu5Y3O8wNOdvWd0T4rAExsMURoEOW2/y+8EG/SMQWe/dHU0G87o2w/nGTYdGY6Du6RNjSJjRJF7WHX68B3ekq1adjvvNins1n1dj0A4SZ9iXGl7/OYVpPsp+m2c5ujw3OW8RhWpmzCV3pWlPJMm5aLez8UabAgztcPUDqGXcR5cxODprfv4zpfZ7Eb0PH58/wCdY5rxZLkjyWm1aNIk7paRlZ1I4aIzFCUiyx4TbY2Ax1oCIYLRt4rw5YcsYaNijssWWAaxkRj8sGWADLRR+WKAFxhOM9ocd7x8oPZXTvPEzpdtYr3dNjfU6CcKTc3M5br4d/DP0Q0ke+PcxAWkzpATaRmG8aI0A8RAesIiGuvlEBJQo5zbznTYDZ4AGkp7Hw1teM6ShTkeSvh08UYtBRwomlh8KDwkVFZo0BOdsukZe1NirUQ6ajlv8JwuMwhpsUbeN3Ig/CR0+4nrKrecb7WYPKL21TVf1Ix1XwYn/dNxePCPLCa046mOP86ia+AORlcbuP1mdTFn6NqO8TXekFUHgfT+XMrVeyCk61UzKD/OokJW0GxKhenlPxLp4r9xLTredfDeycHNHjRWyxuSWcsWWXINFU04vdy1liyx6Zwq+7i93LWWLLDQwq+7iyS1liyw0MKuSLJLOWDJDQwrZIpZyRQ0MON9qMTmcIOA18f7TEMs7RfNUY79flKjTjp6z04WSgjUwO0IBAkeXmfrEjQ0mPVecIsN394QOJ8O+NsAGSYZMzdBImMfSdl+EHyMXwa7Op2cbTdoG84WjtF14+k1sDtxge0BIVD7OmeRdHYU1l+gszsBXWooYcZrUVnOyxMotM7bOFFVCOIvl8d47j9odqY/3akgXnNVa+Lr/wCndQeIH1jS32Js5WtTKFltqjXH9J/gnQpTBpg8N/gf4fOZm1dn1qDK9bUMcha9+HHy9JsbI7VPKd6Ejw4en/iZTkfpNHOl7aLWwHyMR1yn+pdUPip/lpu1U+4nLJenUHJrI3zQ+QI/aZ1NCp7xL7yPnuP875fgrH/py886iG0GWS2hCzuR57I8sBWTBYssAIbRWkxWLLGIhtFaTZYssBENoCslIgywAjtFH5YoAeVF73PO58zANdTuEQ1sPExO/Abh6zjPVXRG7GNWNk1KnePpC7CiX14RO/8AaPqOALD/ALkA1iXsZLRW5m9gXpjRjOfBIkuGw71D2N/fFU6bmkjsVwuGqaEgbrkhgBfdckWmPtbY5oPa+h1Q8xM1sVXouVL2swzfCy3XdfLeXsTtc11W4ygDRR8KniU5KbXy8JNTSf8ARTylr+zW9nsTkIUm87zDC63nl+zXIcd4nqeCHYHdI8ixloeozdohFN2tc7ryHDYhCbFh/OkxPaXFsKzIL34AXuRwt4TLxFbE0kLqmUADX4jqQL2HfCeN0grkU9nU+0OFSvh3RXUkC66i4YHT10nKezeLsRff8D+Hwt6eh5zHobVxB0BzdovuGYmxOpGthYt3yLD4lqb+8tvNmG4MCb/S47pRcTUuSNcib1HeY7ChvHceWtx5G38MmwVbIc3BtHHJhv8AHW/jI8DilqIGU3B+fEf27+kDdk3vobXPLk3hqD0J5TEPxZO1qNBKljlYgngfzDgZYEzXXcTuGl+KH7SwlQr8Wo4MN3jynpxXktPNuceFsLHWiUyQCUJkeWDLJbQWgIjywZZIRFaAiIiC0lIjSIAMtFHWigB4/e2nnI2N45v+4l9OfOcZ6o6ml5K9SwsviZHm4bo1mi7YDTJsPTuZCs0cOLCFPDUrWTJhM8tYfZlRDmU+RtIqL5TeXXxjMLDT5yNVXwupkhxDqCc6h2O82S1+FyBraZi0v5ylx1kbC0cmaRNs9bOveJ6vs5rovcJ5LhmNwes9T2K4aktuAElylePobtHYaVX94VGe1rlQ2nj3TOxGxHZSjEFWFjv8NO+3lOnVo1lkvKl0zfin2cjQ9kaSXIBueJJnN+2exxRRXT4cwVhyNiQfQz08pOS/xBsMI3V6YH+6/wBJTjqvJazNyvFnBbG2q2Ha+9DbOvPkRyYcDOyoYlKih0N0b/ieKkcO77TzgGaOzNotQe41U6OvBh9COc6L499rs5Jr4zvMJVKEq24buq8j4ek0Ep5fh1Q7v0932mFhsWjgEG6nQHiOh68RNnZVXU0n/b10vby1leGvhzc8fSzTXLu3cuXdLQkDqVPQ7vtJ0nWjkaFCRHAREQMjLQWkkaYwG2jJIRBaADIo+0UBHizGEm383RD0jCZxnqDhF3QNppJaDqL5gNRYXvp1HX7wGhU11mhSEpLa/Z3S9SEnRSCQSxhxc2MgtJKZtJsqi9UwLWuLHumfWpmaFPFEC0jrV7xTqNUkympZioQC1tb3ved17NrU92bXDWOUMCBcDTXlecbhMQlNwzk6EGwF532E27RZxkYlbDUK2h5GY5H/ACa45fw1cA7lB7wANxA3eEuqIKLq4BUgg7jH2kuzejHE4D/EytalTS/xVC3giEH1cT0Crunk3+I+Kz4haY3U0F+jOcx/4hJTiW0jHLWSzkY9TGiFeM7ThL2AxppNzU6MOnTrO4wtbMiVAblbC4/FbVD5Bh5Tz1FuL8vvOo9mMTo1JjvF0PI3BH/IL5mY6eitaj0DKHXvFx8xG0esZsx7oOgkzpr/ADeJ2Q9RwV6JRARChhM0Y0ZaNtJbQWgBGRGWkxWMKxiGRR2WGAHiO6JP7wQg6H+cpynpjSYoooDJKbWM1KRmPeaGDe4+XXpJ0jcv2XhHAxiR5kixKiFtBKeKrFDl3Hj0lpGO4G0ZUwofXjz5xL+xmejHhqZewterT0C24+fGGls5wdLTUw+z6hYHLfdM21nWnTx4vuGx7Pbeam4StdQ1hroLmw08eM75GuJy+zNj5gpqqpCkMqmzdobj0nSK9hOeeusHyNN+vYMTUABubAak8hxM8G2pjDXrVKp/G7MOi37I8FAHhPS/b/bHuaBpqe3WBQc1T8beRy/u6TyqdXBPp0cXNXwUKwS1gMP7xwOA1buGtvHd4zoZAfhqZKsRw39x0PraW8HcAOPwML/0nePUiW9h0M7hG3OlXN3XYf8A1kexkv7xD+U/X7ReL0w6WHomyWuq/qUGaLLMD2Xq5qFMneuZD4GdCJ0wvRxcj9jQIbR0FpQmKC0NoYANtGmPgIgAyKOtBANPDSIgNDLVOjmA7j8z9pPUwgyofzG3kbTnw7/IzIpopgxlzMbAEjx68pXqAfgBPWZaNKtK0uYDUOOgI8JTMu7KHaYc1PzEzXRSOy1SrcG8/v8AeWbyoUjkuN0k0WTZcWWqFpQSqOOktU35GYaNyzrtjBCo3X47p0dCinITz7AYpqbXHjOswG0gw3znpNMsnpukgTO2ltFKKM9RsqKLk8TyUDix3ASOpjb6DU8hv8eXjPNvavE1a+IdCexS3KDZVOUFm13tckX6cJvjjyeGeS/CdMzbW02xdVqr6X0ReCIPhUeZJ6kyiqE6AX7psYX2exFQAqqWZQQXcDQ6jQG81cN7Ivp76oFH5UDXPQFgCT3AzvUNLEedXLPbZzdPCsWC5SWO5RqdTYXt1t6TqcLsv/L03Zh21W7/AKXIuid4HaPcs2sFstMNYU0BqH4c2uThnf107wOJmft7EAZcPTuzXux3s7sbknrf5WmvHCL5PLog9mMNd2fglMIO9u03/jf98z9iJeu44HMPUzrcPhBhcOQd4BaoebW18AAAOgE5/wBnMOQzufwpc95BP3m8JuvTN/2US1D97kf7j9p0gmXsKjkpIOlz3nU/OaqiURCnrCFitDDGALQEQ3iJgA2AxxgtAQ20MdFADyvY2zhUd1a4KswIBtb4rjwNpf2ds9KlRE1OVndrk/DYZPX5yZf/AEcdVW1xUUsoHEsFJHTUN4TWwGENEu7kZmBLbrDXMfoPAcpL4dTr2cHWqZiy71Vnygbhc2uBzNpUcW4k9BLGMsjtkfON5I3AnVhfoSZUd78PUyTLyRAS7sn4/wBrfKU9TLuyvjP9J+31mK6ZWe0WwI5FjiI5RJaXRE6cpLhaJYgDfA0v7LTtTNPENLWbeA2Ytu1r4mbWH2RS/IPG5+cOzqegmvTWc7bZfCJMMqiygAcgAB6TzXb+EP8Am3RP/dJv+9gx8iBPUmE5cbNLY16jDsooRL/iYnOT3C49Z0/iLaZx/mVkonw2CdEVUcrZQNADw/Vf5SdcHbUuxPEnKPUC48JohdJXxLECw1Y/COHeek9I8jsxto4n3KlaQu7Df6Zj6DvtK/szsmxNZ+0zaITx/M46bwOg66W/8nnqZN9u3Wb8x/CnQb9OG/fNxEAFhw0HSLDe56Mb2gJZFprvdgv7d7egt4yDZmDHu3P52I71Byj0BPjLlZC1V335EyoOTNr/APnzmhRw4UKo3KB8rQQqZLQSwEmtEghmiYII6KAAihAitABsUdaC0AGxQxQA5LaGGSm61h8aXJudAuoOZju3n6CcjtrbL1yRmOS+gGgbw3nx9Jr+02KNR/dg2QG7HXtsN7HoNw7jymFsvAHE10pjRSSW/Si7/E/MyVP4dcT9ZZ2F7Ovi+2xyU9wNtWP6R9ZU2psl6GjIysCe0dUqC+hHAaT17B4VUUKoAVQAoG4AbhBjsAlRSrrcHeInPoP1Hp4q1PmPOwA8JZ2Ulmc8lt5kfadPtn2SCkvTqZVA7Qe3Zt+VgN3QzBwSZE13ub+A3TnvUjq46VP0SGOWKKSOkBEv7ObtCUlEs4M2YRV0ans73Zm4TWpzA2dVsBNui95zMsSmVcSut+ctEyF5Ti5PCtI8/EuSXJEjQOtrnjEV4iFXnrRc2tR4dxXG8ZHhcPkHViWY8yZMREDETNNGPL2UMFSzLf8AM7MetibfITQEbQQKoUcJIIJBT0cIooAYxBihggAYoooDBDFATAQYo28UAPOscVFZ2ZRZTZQdxO67ec0PYrBj3lZ7bitNfLM3ndY7aOzS5ZgpJZ8ug0VEuXJ/cLeAmx7M4f3dMkixd3Y/7yo9FEguzrbXidAi2EjrVLSti9opTF3YDlfeTyA3nwnK7c9o865KBIB+NzobckHDv8ucdXM9mY46p+iD2ix2d2TNmA0YD4U/Tf8AE/kByJmA5v8AToIifLhGzkqnT09HjhSsFDFFMlRyGT4X4hK50lvAJdpmuhrs6fBva03MLU0nN4Z+0AJu0jYSDLI0s8jdpAtSBnmQCz2iDA98heoBvNpmYna6J8JzHpu85WLuXsk+Tji1lI3A8dcTj6m2apPZsL6BQN5OgE2tp7TOGpohs1Rxcn8o4m3foO6ds/leva9nm3+F79P0aucCOFQTkU25U45T4EfIy1T24DvTyP3llzyyFfici69nT3EcJiYfaiHiR3g/MTRp1bi4NxzGspNzXTI1x3PawtwERiPJJoyKCGNgIMBhMaYAK8UEUYjIxO2cPSGUupIuCF7R13jTQeMwsT7TkC1JAo11bU8/hGnqZzYElwyZnUc2X5icFcz+Hrz+PK79kuNrO2tRizvoSbdld5Uchw04mVmeS7S1qm3AD11PzHlKuvKST32y6SXpD7wiRkxZjAeksnwlPMwEpFjNTYiZ3HTUxV6Q59s2MVstMgbdKCKE0Wbe13C0wOJOk57PJLWijxG3sijmOY7hNKtiAsw8NtQImVRc8ekjqYh3N93fE5bZpNYby45bakCU8RtgbqYzHnwEzqdMH4jeX6FNeAixIN0o1DVq7728hIMRgHRcxIty1nQB0pi7EDvmJtPHe8NhuHrGm99CaDsDD+8xCDgt3bw0HqRK+18V72u730zFV6KnZFvK/jLGyahprUcG1lAHkxPzWZVMTS7ZgcTJ8ObkXlcxym00xm0jqNNJaw1dlPZMw6JJnRYCkLazDbnoeKljNTDVsw68R9RLiPKaYe2o8pOh/nyM7vxufy/5rs8n8v8AG/T/AOp6LBgEAMM7DiBBDBAQooooCPJ5PhDZ0/qX5iPx9DI5AkVA2ZT1Hznk7qPoc9j9rDLWbw+QEiBBml7W0ctcfqRW8yZkUTHPuUL6SWjY8xsBiAlvAV/dsGHjKgjwYNAmamNxvvDfusOUqXkKtJlEzmG90mpsBuElzmQKJIBMjJVqAamObGtbsmw58ZScRsMDSWpVLbySesiiitGIvKbYZv1P8yo+SmUElysbYdOrsfVzKaxT9EIR4EYJKsYy1hk1m9gZjYZZvYFZOmbk16I0jyn9+6GisltrCKc0mjPJKqHL+ldTHys1UBjrxknv15z209WnzjnG1/BLGGRnELzkbYhecaMtFi8Eg/zC84YxYzgdrfGe+Ul4RRTx10fRvs2fbH/Vp/8Awr82mBTiijj9qMvskMAiijGEQxRRgOWWFiimaNInWPiimDRHWkJiijQmKEQxRgWsT/oUu8/IyiIopmRDlkyRRRs0aGFm7s+KKSZpG3Sj3iighs5DH/6jf1H5xkUU9qP2o+cv99f6RtIWiimkYY2KKKMR/9k="
  },{
    name: "Vinoth",
    pic:  ""
  }]
  return (
    <div className='App'>
      {students.map(nm=><Message name={nm.name} pic={nm.pic}/>)}
    </div>
  )
}

export default ObjectInProps



const Message = ({pic,name}) => {
  return (
    <div>
      <img src={pic} alt={name}></img>
      <h1>Hi {name}</h1>
      <Like />
    </div>
  )
}

//Creating a like and unlike button
const Like = props => {

  let initialState=0;
  const [Like, setLike] = useState(initialState)
  return (
    <div>
      <button onClick={()=>setLike(Like+1)}>LIKE {Like}</button>
    </div>
  )
}






