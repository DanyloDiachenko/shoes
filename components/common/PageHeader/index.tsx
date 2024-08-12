export const PageHeader = () => {
    return (
        <div
            className="page-header text-center"
            style={{
                backgroundImage:
                    "url(/images/page-header-bg.jpg)",
            }}
        >
            <div className="container">
                <h1 className="page-title">
                    List<span>Shop</span>
                </h1>
            </div>
        </div>
    );
};
