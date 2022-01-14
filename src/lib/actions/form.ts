// enhance html form element
// find the declaration at index.svelte
// action happens everytime we touch the form. Hence we need to remove the action to prevent memory leaks etc
export const enhance = (form: HTMLFormElement, {
    result 
}) => {
    console.log("Form mounted to DOM.");

    const handleSubmit = async (event: Event) => {
        event.preventDefault();

        try{
            const body = new FormData(form);
            const res = await fetch(form.action, {
                method: form.method,
                headers: {
                    accept: "application/json"
                },
                body  //because body:body is the same name
            });

            if (res.ok) {
                // console.log('API Response: ', await res.json());  //We can only call res.json() once 
                result(res, form); //allow us to be flexible with the user interface
            } else {
                console.error("Fetch error: ", await res.text())
            }

        } catch(error){
            console.error("Could not submit the form: ", error);
        }
    };

    form.addEventListener("submit", handleSubmit);

    return {
        destroy() {
            console.log("Form removed to DOM.");
            form.removeEventListener("submit", handleSubmit);
        }
    }
};
