import dataDocument from '../../../data/data.json';
import './allArticles.css';
import Articles from '../Articles/Articles';

function AllArticles() {
    const dataArticles = dataDocument.map((data, index) => {
        return (<Articles key={index} index={index} image={data.image} category={data.category} name={data.name} price={data.price}/>)
    });

    return (
        <section className='all-articles'>
            {dataArticles}
        </section>
    );
}

export default AllArticles;