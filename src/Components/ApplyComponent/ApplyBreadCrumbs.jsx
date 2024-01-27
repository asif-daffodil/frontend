
const ApplyBreadCrumbs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-4 pb-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Program</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Apply</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ApplyBreadCrumbs;