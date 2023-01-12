export interface IPuppies {
    puppyId: number;
    name: string;
    breed: string;
    dob: string
}

export interface INewPuppy {
    name: string;
    breed: string;
    dob: string
}

export interface IPuppiesProps {
    puppy: IPuppies;
    function?(e: React.ChangeEvent<HTMLInputElement>): void;
    deleteFunction(id: number): void;
    updateFunction(puppy: IPuppies): void
    setPuppiesList : React.Dispatch<React.SetStateAction<IPuppies[]>>
}

export interface IPuppiesInfo {
    info?: string | number
    setValue : React.Dispatch<React.SetStateAction<string>>
}

export interface IPuppiesAdd {
    addFunction(newPuppy: INewPuppy): void
}

