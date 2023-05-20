
import {  FaRegStar, FaStar  } from 'react-icons/fa';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import {  useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const Category = () => {
   
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('Marvel');
    useEffect(() => {
        // Fetch initial data for the default category (Marvel)
        const url = `https://toy-stars-server.vercel.app/toys?category=${activeTab}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setToys(data));
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);  

    const handleTabClick = (category) => {
        setActiveTab(category);
    
        // Update the URL and fetch data based on the selected category
        const url = `https://toy-stars-server.vercel.app/toys?category=${category}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setToys(data));
      };
    
    return (
        <div className="container mb-5 mt-5">
        <h2 className='text-center mb-3 p-4 underline'>Products By Category</h2>
        <Tabs className="responsive-tabs">
          <TabList className="nav nav-pills nav-justified mb-3 bg-light rounded flex-column flex-md-row">
            <Tab className={`nav-item ${activeTab === 'Disney Princess' ? 'active' : ''}`}
              onClick={() => handleTabClick('Disney Princess')} style={{ cursor: 'pointer' }}>
              <span className="nav-link text-dark fw-bold">| Disney Princess |</span>
            </Tab>
            <Tab className={`nav-item ${activeTab === 'Frozen Dolls' ? 'active' : ''}`}
              onClick={() => handleTabClick('Frozen Dolls')} style={{ cursor: 'pointer' }}>
              <span className="nav-link text-dark fw-bold">| Frozen Dolls |</span>
            </Tab>
            <Tab className={`nav-item ${activeTab === 'Animation Characters' ? 'active' : ''}`}
              onClick={() => handleTabClick('Animation Characters')} style={{ cursor: 'pointer' }}>
              <span className="nav-link text-dark fw-bold">| Animation Characters |</span>
            </Tab>
          </TabList>

          <TabPanel className="responsive-tab-panel">
            <div className="p-4 bg-light">
              <h2 className="mb-4">Products</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {toys.map((toy) => (
                  <div key={toy._id} className="col mb-4">
                    <div className="card shadow">
                      <img src={toy.toyPhotoURL} className="card-img-top img-fluid" alt="Product Image" style={{ objectFit: "contain", height: "250px" }} />
                      <div className="card-body">
                        <h5 className="card-title">{toy.toyName}</h5>
                        <p className="card-text">Price: ${toy.price}</p>
                        <p className="card-text">Rating: <Rating
                              placeholderRating={toy.rating}
                              readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                              fullSymbol={<FaStar></FaStar>}>
                              
                            </Rating> ({ (toy.rating)})</p>
                            <Link to={`/view-details/${toy._id}`}><button onClick={() => handleViewDetails(toy._id)} className="btn btn-warning">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel className="responsive-tab-panel">
          <div className="p-4 bg-light">
              <h2 className="mb-4">Any Content 1</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {toys.map((toy) => (
                  <div key={toy._id} className="col mb-4">
                    <div className="card shadow">
                      <img src={toy.toyPhotoURL} className="card-img-top img-fluid" alt="Product Image" style={{ objectFit: "contain", height: "250px" }} />
                      <div className="card-body">
                        <h5 className="card-title">{toy.toyName}</h5>
                        <p className="card-text">Price: ${toy.price}</p>
                        <p className="card-text">Rating: <Rating
                              placeholderRating={toy.rating}
                              readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                              fullSymbol={<FaStar></FaStar>}>
                              
                            </Rating> ({ (toy.rating)})</p>
                            <Link to={`/view-details/${toy._id}`}><button className="btn btn-warning">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel className="responsive-tab-panel">
          <div className="p-4 bg-light">
              <h2 className="mb-4">Any Content 1</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {toys.map((toy) => (
                  <div key={toy._id} className="col mb-4">
                    <div className="card shadow">
                      <img src={toy.toyPhotoURL} className="card-img-top img-fluid" alt="Product Image" style={{ objectFit: "contain", height: "250px" }} />
                      <div className="card-body">
                        <h5 className="card-title">{toy.toyName}</h5>
                        <p className="card-text">Price: ${toy.price}</p>
                        <p className="card-text">Rating: <Rating
                              placeholderRating={toy.rating}
                              readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                              fullSymbol={<FaStar></FaStar>}>
                              
                            </Rating> ({ (toy.rating)})</p>
                            <Link to={`/view-details/${toy._id}`}><button className="btn btn-warning">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default Category;