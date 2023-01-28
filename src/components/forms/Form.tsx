
import {FormWrapper, SaveButton} from "./FormStyle";
import Profile from "./Profile";
import Qualifications from "./Qualifications";

const Form = ({handlePrint}:any) => {

	return (
		<FormWrapper>
			<Profile/>
			<Qualifications/>
			<SaveButton className="print-button" onClick={handlePrint}>Save</SaveButton>
		</FormWrapper>
	)
}

export default Form;
