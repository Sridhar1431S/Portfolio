const name = "sridhar"
undefined
const email = "sridhar709398@gmail.com"
undefined
const phone = "1234567890"
undefined
const requestUrl = 'https://ck.hdm3.in/lp.php?_save_form=true&hid=71062be2n6fd6ve1ec8571dbwf23c3w6f983a89&sid=085aaaf6&lead_data[name]=${encodedURIComponent(name)}&lead_data[email]=${encodedURIComponent(email)}&lead_data[phone]=${encodedURIComponent(phone)}';
undefined
async function submitForm(){
    try {
        const response = await fetch(requestUrl,{method:"GET"});if(response.ok){
    } catch (error) {
        
async function submitForm(){
    try {
        
    } catch (error) {
        
    }
async function submitForm(){
    try {
        const response = await fetch(requestUrl,{method:"GET"})
        if(response.ok){
            console.log("Form submitted successfully")
        }else{
            console.log("Failed to submit the form",response.status)
        }
    }
VM1263:9 Uncaught SyntaxError: Missing catch or finally after tryUnderstand this error
async function submitForm(){
    try {
        const response = await fetch(requestUrl,{method:"GET"})
        if(response.ok){
            console.log("Form submitted successfully")
        }else{
            console.log("Failed to submit the form",response.status)
        }
    } catch (error) {
        console.log("Error occurred while submitting the form: ",error)
    }
}
undefined

submitForm();
Promise {<pending>}
VM1504:5 Form submitted successfully