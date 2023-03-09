import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selector";
    
export const Filter = () => {

    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    

    const handleChange = e => {
        const { value } = e.currentTarget;
        dispatch(setFilter(value))
    }


    return (
        <div className='FindContact'>
        <h3>Find contact by name</h3>
            <input 
                name="filter"
                className='SortInput'
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder=''
            />
        </div>
    );
}