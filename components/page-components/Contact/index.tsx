"use client";

import styles from "./styles.module.scss";
import { Banner } from "./Banner";
import { ContactInfoAndQuestions } from "./ContactInfoAndQuestions";
import { OurStores } from "./OurStores";
import { useState } from "react";
import { stores } from "@/data/stores";
import dynamic from "next/dynamic";
import { GoogleMapSkeleton } from "./GoogleMap/Skeleton";

const GoogleMap = dynamic(
    () => import("./GoogleMap").then((mod) => mod.GoogleMap),
    {
        loading: () => <GoogleMapSkeleton />,
        ssr: false,
    }
);

export const ContactPageComponent = () => {
    const [center, setCenter] = useState<{ lng: number; lat: number }>({
        lng: stores[0].lng,
        lat: stores[0].lat,
    });

    return (
        <>
            <Banner />
            <div className="page-content">
                <div className="container">
                    <ContactInfoAndQuestions />
                    <hr className={styles.divider} />
                    <OurStores
                        onViewStoreOnMapClick={(lng, lat) =>
                            setCenter({ lng, lat })
                        }
                    />
                </div>
            </div>
            <GoogleMap center={center} />
        </>
    );
};
