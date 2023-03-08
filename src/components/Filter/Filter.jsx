import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selector";
    
export function Filter() {

    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChange = e => {
        const { value } = e.currentTarget;
        dispatch(setFilter(value))
    }


    return (
        <div className='FindContact'>
        <h3>Find contact by name</h3>
            <input 
                className='SortInput'
                type="text"
                value={filter}
                onChange={onChange}
                placeholder=" "
            />
        </div>
    );
}