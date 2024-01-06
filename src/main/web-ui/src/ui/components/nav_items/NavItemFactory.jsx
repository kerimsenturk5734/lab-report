import {UserType} from "../Constants";
import NavItemsDoctor from "./NavItemsDoctor";
import NavItemLabTechnician from "./NavItemLabTechnician";
import NavItemPatient from "./NavItemPatient";

export function NavItemFactory({userType = UserType}){
    switch (userType){
        case UserType.DOCTOR: return <NavItemsDoctor/>
        case UserType.LAB_TECHNICIAN: return  <NavItemLabTechnician/>
        case UserType.PATIENT: return <NavItemPatient/>
        default : return <>Wrong Selection -> ${userType}</>
    }
}