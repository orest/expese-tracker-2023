import { useEffect, useState } from "react";

const NewExpense = (props) => {
  console.log("INIT NewExpense");
  const [message, setMessage] = useState("Hello World");
  const [country, setCountry] = useState("");
  const [people, setPeople] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [expenseItem, setExpenseItem] = useState({
    date: "",
    title: title,
    category: "",
    cost: 0,
  });

  const saveHandler = () => {
    console.log("button clicked");
    const newMessage = `${message}!`;
    setMessage(newMessage);
    console.log(message);
  };

  const getDataHandler = () => {
    getUSerData();
  };

  //   useEffect(() => {
  //     getUSerData(5);
  //   }, []);

  //   useEffect(() => {
  //     getUSerData(2);
  //   }, [country]);

  //getUSerData();

  function getUSerData(numOfPeople) {
    const urls = ["https://randomuser.me/api/?results=2", "https://swapi.dev/api/starships/9/"];
    const promises = urls.map((el) => {
      return fetch(el);
    });

    Promise.all(promises).then((response) => {
      const randomPeopleResponse = response[0];
      if (randomPeopleResponse.ok) {
        randomPeopleResponse.json().then((personBody) => {
          console.log(personBody);
          let vm = personBody.results.map((person) => {
            return {
              first: person.name.first,
              last: person.name.last,
              id: person.id.value,
            };
          });
          console.log(vm);
          setPeople(vm);
        });
        ///
      }

      console.log(randomPeopleResponse);
      const starshipResponse = response[1];
    });

    ///var p= await  fetch("https://randomuser.me/api/?results=" + numOfPeople)

    // fetch("https://randomuser.me/api/?results=" + numOfPeople).then(async (p) => {
    //   console.log(p);
    //   const data = await p.json();
    //   console.log(data);
    //   setPeople(data.results);
    // });

    console.log("hello");
  }

  const countryChangeHandler = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };

  const onSubmitHandler = (e) => {
    debugger;
    e.preventDefault();

    console.log(expenseItem);
  };

  const onTitleChangeHandler = (e) => {
    //setTitle(e.target.value);

    var x = JSON.stringify(expenseItem);
    var y = JSON.parse(x);

    const newItem = { ...expenseItem, title: e.target.value };
    setExpenseItem(newItem);

    setExpenseItem((prev)=>{
        return { ...prev, title: e.target.value };
    })
  };

  const onTitleBlurHandler = (e) => {
    console.log(e.target.value);

    const value = e.target.value;

    if (!value) {
      setErrorMessage("Please enter value for Title");
    } else {
      setErrorMessage("");
    }
  };

  let inputClass = "form-control";

  if (!!errorMessage) {
    inputClass = `${inputClass}  is-invalid`;
  }

  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Expense Title
          </label>
          <input type="text" onChange={onTitleChangeHandler} onBlur={onTitleBlurHandler} className={inputClass} id="title" aria-describedby="textHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Date
          </label>
          <input type="date" className="form-control" id="title" />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Category
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value=""></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Cost
          </label>
          <input type="number" className="form-control" />
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-success w-25 ">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
