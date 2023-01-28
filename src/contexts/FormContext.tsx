import React, { createContext , useState, useEffect} from "react";
import emptyAvatar from '../images/empty-avatar.png';

type FormDataType = {
	fullName: string
	position: string
	profilePicture:any
	phone:string
	email:string
	linkedin:string
	github:string
	address:string
	about:string
	universityName:string
	collegeDegree:string
	collegeStartDate:string
	collegeEndDate:string
	highSchoolName:string
	highSchoolDegree:string
	highSchoolStartDate:string
	highSchoolEndDate:string
	skills:string
	experiences:string
}

// For context provider values (e.g value={{formData, handleFormInput, . . .}})
type FormDataContextType = {
	formData: FormDataType;
	handleFormInput: (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	handleImage: (event:React.ChangeEvent<HTMLInputElement>) => void
}

type FormDataContextProviderProps = {
	children: React.ReactNode;
}

export const FormDataContext = createContext({} as FormDataContextType);

export const FormDataContextProvider = ({children}: FormDataContextProviderProps) => {
	const [formData, setFormData] = useState<FormDataType>(
		{
			fullName: "",
			position: "",
			profilePicture:emptyAvatar,
			phone:"",
			email:"",
			linkedin:"",
			github:"",
			address:"",
			about:"",
			collegeDegree:"",
			universityName:"",
			collegeStartDate:"",
			collegeEndDate:"",
			highSchoolDegree:"",
			highSchoolName:"",
			highSchoolStartDate:"",
			highSchoolEndDate:"",
			skills:"",
			experiences:"",

		}
	)

	

	const handleFormInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {name, type, value} = event.target;
		setFormData(prevFormData => {
			return {...prevFormData,
				[name] : value
			}
		})
	}

	const handleImage = (event: React.ChangeEvent<HTMLInputElement>)=>{

		if(!event.target.files){
			return;
		}
		
    const file = event.target.files[0];
    const reader = new FileReader()
    reader.onload = () => {
      setFormData(prevFormData => {
        return {...prevFormData, profilePicture: reader.result}
      })
    }
    reader.readAsDataURL(file)
  }

	return(
		<FormDataContext.Provider value={{formData, handleFormInput, handleImage}}>
			{children}
		</FormDataContext.Provider>
	);
}