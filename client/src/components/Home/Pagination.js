import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from '../../lib/state/actions'

const Pagination = () => {
	const dispatch = useDispatch()
	const { items, pageIndex } = useSelector(state => ({ ...state.products }));
	const updatePage = (event, index) => {
		event.preventDefault()
		dispatch(setPage(index))
	}
	const Previous = React.useMemo(() => { 
		return { isDisabled: pageIndex === 0 }
	}, [pageIndex])
	const Next = React.useMemo(() => { 
		return { isDisabled: pageIndex === items.length - 1  }
	}, [pageIndex])
		
    return (
		!!items.length &&
		<nav aria-label="Page navigation example" className="float-right" style={{ marginBottom: '100px' }}>
			<ul className="pagination">
				<li className={`page-item ${ Previous.isDisabled ? 'disabled' : ''}`}><Link className="page-link" to="#" onClick={(e) => updatePage(e, pageIndex - 1)}>Previous</Link></li>
					{items.map((_, index) => <li key={index} className="page-item"><Link className="page-link" onClick={(e) => updatePage(e, index)}>{ index + 1 }</Link></li>)}						
				<li className={`page-item ${ Next.isDisabled ? 'disabled' : ''}`}><Link className="page-link" to="#" onClick={(e) => updatePage(e, pageIndex + 1)}>Next</Link></li>
			</ul>
		</nav>)
}
export default Pagination