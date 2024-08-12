export const Breadcrumbs = () => {
    return (
        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="#">Shop</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        List
                    </li>
                </ol>
            </div>
        </nav>
    );
};
