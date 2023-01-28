import { useContext } from "react"
import { FormDataContext } from "../../contexts/FormContext"
import { ContactInformation, PreviewH3, PreviewPara } from "./PreviewStyle"

const Contact = () => {
	const {formData} = useContext(FormDataContext);
	return (
		<div>
			<h1>Contacts</h1>
			<ContactInformation>
				<div>
					<PreviewH3>Phone Number:</PreviewH3>
					<PreviewPara>{formData.phone}</PreviewPara>
				</div>

				<div>
					<PreviewH3>Email:</PreviewH3>
					<PreviewPara>{formData.email}</PreviewPara>
				</div>

				{formData.linkedin !== '' && <div>
					<PreviewH3>LinkedIn Profile:</PreviewH3>
					<PreviewPara>{formData.linkedin}</PreviewPara>
				</div>}

				{formData.github !== '' && <div>
					<PreviewH3>Github Profile:</PreviewH3>
					<PreviewPara>{formData.github}</PreviewPara>
				</div>}

				<div>
					<PreviewH3>Home Address:</PreviewH3>
					<PreviewPara>{formData.address}</PreviewPara>
				</div>
			</ContactInformation>
		</div>
	)
}

export default Contact