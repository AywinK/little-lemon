import FormSectionIndication from "./FormSectionIndication";
import BookingDetails from "./BookingDetails";
import ContactDetails from "./ContactDetails";

const FormSection = () => {

    return (
        <section>
            <FormSectionIndication />
            <BookingDetails />
            <FormSectionIndication />
            <ContactDetails />
        </section>
    )
}

export default FormSection;