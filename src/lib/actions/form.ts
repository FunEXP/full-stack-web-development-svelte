// enhance html form element
// find the declaration at index.svelte
// action happens everytime we touch the form. Hence we need to remove the action to prevent memory leaks etc
export const enhance = (form: HTMLFormElement) => {
    console.log("Form mounted to DOM.");

    const handleSubmit = async (event: Event) => {
        event.preventDefault();

        try{
            const res = await fetch("TODO: endpoint");
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
