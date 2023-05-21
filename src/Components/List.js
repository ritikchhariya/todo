import { Component } from 'react';

class List extends Component {
    render() {
        return (
<div>

<ul className="list-group">

{
this.props.dir.map((item, index) => (
<li className="list-group-item" key={index}>
<table className='table table-bordered'>
<thead>
<tr>
<th>Name</th>
<th>Author</th>
<th>Year of Publish</th>
<th>ISBN No.</th>
<th>View</th>
<th>Edit</th>
<th>Delete</th>
</tr>
</thead>
<thead>
<tr>
<th>{item.name}</th>
<th>{item.aut}</th>
<th>{item.tel}</th>
<th>{item.isbn}</th>
<th>
<span className="float-right">

<button
className="btn btn-success btn-sm"
onClick={
(e) => this.props.view(item, e)
}
>View</button>
</span>
</th>
<th>
<span className="float-right">
<button
className="btn btn-warning btn-sm"
onClick={(e) => this.props.edit(index, e)}
>Edit</button>
</span>
</th>
<th>
<span className="float-right">

<button
className="btn btn-danger btn-sm"
onClick={
(e) => this.props.delete(index, e)
}
>Delete</button>
</span>
</th>


</tr>
</thead>
</table>
</li>
))
}

</ul>

</div>
        )
    }
}

export default List;