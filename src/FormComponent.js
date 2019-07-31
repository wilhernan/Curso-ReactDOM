import React from 'react'

function FormComponent(props) {
    return(
        <main>      
            <form>
                <input
                    type = "text"
                    value = {props.data.firstName}
                    name = "firstName"
                    placeholder= "First Name"
                    onChange = {props.handleChange}
                /> 
                <br/>        
                <input
                    type = "text"
                    value = {props.data.lastName}
                    name = "lastName"
                    placeholder= "Last Name"
                    onChange = {props.handleChange}
                />
                <br/>
                <input
                    type = "text"
                    value = {props.data.age}
                    name = "age"
                    placeholder= "Age"
                    onChange = {props.handleChange}
                />
                <br/>
                <label>
                    <input
                    type = "radio"
                    value = "Male"
                    name= "gender"
                    checked= {props.data.gender === "Male"}
                    onChange= {props.handleChange}
                    />Male
                </label>
                <br/>
                <label>
                    <input
                    type = "radio"
                    value = "Female"
                    name= "gender"
                    checked= {props.data.gender === "Female"}
                    onChange= {props.handleChange}
                    />Female
                </label>
                <br/>
                <select 
                    value= {props.data.destination}
                    name= "destination"
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                </select>
                <br/>
                <label>
                    <input
                    type = "checkbox"              
                    name= "isVegan"
                    checked= {props.data.isVegan}
                    onChange= {props.handleChange}
                    />Vegan?
                </label>
                <br/>
                <label>
                    <input
                    type = "checkbox"              
                    name= "isKosher"
                    checked= {props.data.isKosher}
                    onChange= {props.handleChange}
                    />Kosher?
                </label>
                <br/>
                <label>
                    <input
                    type = "checkbox"              
                    name= "isLactoseFree"
                    checked= {props.data.isLactoseFree}
                    onChange= {props.handleChange}
                    />Lactose Free?
                </label>
                <br/>
                <button>Submit</button>
            </form>
                <hr/>
                <h2>Entered Information:</h2>
                <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your Age: {props.data.age}</p>
                <p>Your Gender: {props.data.gender}</p>
                <p>Your Destination: {props.data.destination}</p>
                <p>Vegan? {props.data.isVegan ? "Yes" : "No"}</p>
                <p>Kosher? {props.data.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free? {props.data.isLactoseFree ? "Yes" : "No"}</p>            
        </main>
    )
}
export default FormComponent 