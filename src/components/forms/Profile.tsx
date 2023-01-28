// import React from 'react'
import { useContext } from "react";
import { FormDataContext } from "../../contexts/FormContext";
import { StyledFormSections, FormInput, TextArea, UploadButton , UploadInput, UploadLabel, FormH1} from "./FormStyle";


const Profile = () => {
	const {formData, handleFormInput, handleImage} = useContext(FormDataContext);
	return (
		<StyledFormSections>
		<FormH1>Personal Info</FormH1>
			<FormInput
				type="text"
				name="fullName"
				value={formData.fullName}
				placeholder="Full Name"
				onChange={(e) => handleFormInput(e)}
			/>
			<FormInput
				type="text"
				name="position"
				value={formData.position}
				placeholder="Position"
				onChange={(e) => handleFormInput(e)}
			/>
		<UploadButton className="upload-photo">
			<UploadInput
				className="hidden"
				type="file"
				name="profilePicture"
				placeholder="ads"
				onChange={(e) => handleImage(e)}
			/>
			<UploadLabel className="upload-photo-label" htmlFor="files">Upload a Photo</UploadLabel>
		</UploadButton>
			<FormInput
				type="tel"
				name="phone"
				value={formData.phone}
				placeholder="Phone"
				onChange={(e) => handleFormInput(e)}
			/>
			<FormInput
				type="email"
				name="email"
				value={formData.email}
				placeholder="Email Address"
				onChange={(e) => handleFormInput(e)}
			/>
			<FormInput
				type="text"
				name="linkedin"
				value={formData.linkedin}
				placeholder="LinkedIn Profile (Optional)"
				onChange={(e) => handleFormInput(e)}
			/>
			<FormInput
				type="text"
				name="github"
				value={formData.github}
				placeholder="Github Profile (Optional)"
				onChange={(e) => handleFormInput(e)}
			/>
			<FormInput
				type="text"
				name="address"
				value={formData.address}
				placeholder="Home Address"
				onChange={(e) => handleFormInput(e)}
			/>
			<TextArea
				maxLength={300}
				name="about"
				cols={30}
				rows={5}
				placeholder="Write a short summary about yourself."
				onChange={(e) => handleFormInput(e)}
				value={formData.about}
			/>
	</StyledFormSections>
	)
}

export default Profile;
