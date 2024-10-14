//* Modal (Confirm website choice)

const modal_div = document.getElementById("modal");
const modal_ack = sessionStorage.getItem("modal_ack");

// If the user has not seen the modal this session
if (modal_ack == false || modal_ack == null)
{
    // Parse url for redirect (from other website)
    const url_params = new URLSearchParams(window.location.search);

    // If the user has been redirected from another website
    if (url_params.get("mredirect") == "true")
    {
        // Save to session.
        sessionStorage.setItem("modal_ack", true);
        modal_div.style.display = "none";
    }
    else
    {
        // Display modal
        modal_div.style.display = "block";
    }
}