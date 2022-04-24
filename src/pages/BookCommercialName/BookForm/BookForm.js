import { useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import "./BookForm.scss";

const BookForm = (props) => {
    const [enteredNameType, setEnteredNameType] = useState("");
    const [enteredCommercialType, setEnteredCommercialType] = useState("");
    const [enteredCommercialTypeFor, setEnteredCommercialTypeFor] = useState("");
    const [enteredCommercialName, setEnteredCommercialName] = useState("");



    const submitHandler = (event) => {
        event.preventDefault();
        const commercialName = {
            type: enteredNameType,
            commercialType: enteredCommercialType,
            commercialTypeFor: enteredCommercialTypeFor,
            commercialName: enteredCommercialName,
          };

        props.onSaveForm(commercialName);

        setEnteredNameType("");
        setEnteredCommercialType("");
        setEnteredCommercialTypeFor("");
        setEnteredCommercialName("");
    }

    const typeNameChangeHandler = (event) => {
        setEnteredNameType(event.target.value);
    }

    const commercialTypeChangeHandler = (event) => {
        setEnteredCommercialType(event.target.value);
    }

    const commercialTypeForChangeHandler = (event) => {
        setEnteredCommercialTypeFor(event.target.value);
    }
    const commercialNameChangeHandler = (event) => {
        setEnteredCommercialName(event.target.value);
    }

  return (
    <form onSubmit={submitHandler} className="book-form bg-white mt-20 shadow-sm p-25">
      <SectionHeader title={"الاسم التجارى"} color={"#212529"}></SectionHeader>

      {/* Checkboxes */}
      <p className="fs-6 fw-bold">حدد نوع الاسم التجارى</p>
      <div className="book-form__checkboxes d-flex mb-25" onChange={typeNameChangeHandler}>
        <div className="form-check book-form__check p-15 w-25 border d-flex">
          <input
            required
            className="form-check-input"
            type="radio"
            name={enteredNameType}
            id="flexRadioDefault1"
            value={"special"}
            checked={enteredNameType === "special"}
            onChange={e => {}}/>
          <label className="form-check-label me-30" htmlFor="flexRadioDefault1">اسم خاص</label>
        </div>
        <div className="form-check book-form__check py-15 p-15 w-25 border d-flex me-20">
          <input
            required
            className="form-check-input"
            type="radio"
            name={enteredNameType}
            id="flexRadioDefault2"
            value={"recommended"}
            checked={enteredNameType === "recommended"}
            onChange={e => {}}/>
          <label className="form-check-label me-30" htmlFor="flexRadioDefault2">اسم مقترح</label>
        </div>
      </div>
        <div className="row">
            <p className="fs-6 fw-bold">
                اختر الكلمة السابقة والكلمة اللاحقة التى ستضاف إلى الاسم التجارى
            </p>
            <div className="col-4">
                <div className="book-form__commercial-type">
                    <label className="fw-normal mb-10" htmlFor="commercialType">نوع المنشأة "الكلمة السابقة"</label>
                    <select className="form-select" value={enteredCommercialType} onChange={commercialTypeChangeHandler} id="commercialType" required>
                        <option disabled defaultValue value={""}>-- من فضلك اختر نوع المنشأة "الكلمة السابقة" --</option>
                        <option value={"مركز"}>مركز</option>

                    </select>
                </div>
            </div>

            <div className="col-4">
                <div className="book-form__commercial-activity">
                    <label className="fw-normal mb-10" htmlFor="commercialTypeFor">نوع المنشأة "الكلمة اللاحقة"</label>
                    <select className="form-select" id="commercialTypeFor" value={enteredCommercialTypeFor} onChange={commercialTypeForChangeHandler} required>
                        <option disabled defaultValue value={""}>-- من فضلك اختر نوع المنشأة "الكلمة اللاحقة" --</option>
                        <option defaultValue value={"للتجارة"}>للتجارة</option>

                    </select>
                </div>
            </div>
        </div>
        <div className="row mt-15">
            <div className="col-3">
                <div className="book-form__commercial-type">
                    <label className="fw-normal mb-10" htmlFor="commercialName">اسم المالك "اسم الكيان"</label>
                    <input className="form-control" type="text" minLength={5} id="commercialName"
                    maxLength={50} required value={enteredCommercialName} onChange={commercialNameChangeHandler}/>
                </div>
            </div>
        </div>
        <button className="btn btn-info btn-lg me-auto d-block" type="submit">التالى</button>
    </form>
  );
};

export default BookForm;
