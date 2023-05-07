


const Textfield = () => {
  return (
    <div>
        <div className='text-container'>
          <h2 className='headline'>Unverschlüsselter Text:</h2>
          <textarea id = "input" placeholder="Eingabe" required></textarea>
        </div>
        <div className='text-container'>
            <h2 className='headline'>Verschlüsselter Text:</h2>
            <textarea id = "output" placeholder="Ausgabe" required></textarea>
        </div>
    </div>
  )
}

export default Textfield