
export function People() {
  const people = [
    { id: 135, first: 'Phoebe', last: 'Buffay', image: '/images/pbuffay.jpg', notes: 'Guitarist. Surrogate mom. Has a smelly cat.' },
    { id: 225, first: 'Ross', last: 'Geller', image: '/images/rgeller.jpg', notes: 'PhD in Paleontology' },
    { id: 1043, first: 'Chandler', last: 'Bing', image: '', notes: 'No one is certain what he does for a living. Could he BE more sarcastic?' },
    { id: 17, first: 'Rachel', last: 'Green', image: '/images/rgreen.jpg', notes: 'Fashion designer' },
  ]

  return (
    <>
     {people.map(person => <section key={person.id}>
        {person.image?<img src={person.image} alt="first" />: null}
        <h2>{person.first} {person.last}</h2>
        <p>{person.notes}</p>
      </section>)}
    </>
  )
}