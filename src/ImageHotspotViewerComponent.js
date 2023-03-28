import React from 'react';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, Button } from "@mui/material";
import breakpoints from "./assets/theme/breakpoints";


const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip
        {...props}
        classes={{ popper: className }}
    />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 300,
    },
});

const CustomWidthTooltipMobile = styled(({ className, ...props }) => (
    <Tooltip
        {...props}
        classes={{ popper: className }}
    />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 200,
    },
});



export function ImageHotspotViewerComponent({ image, hotspots, imageStyles, onEventChange }) {

    const [mobileView, setMobileView] = useState(false)

    const [selectedTooltip, setSelectedTooltip] = useState(null); //for mobile view


    useEffect(() => {
        //check for mobile devices
        if (window.innerWidth < breakpoints.values.lg) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    }, [])

    const onClickEvent = (e) => {

        if (e.target.id === "hotspotimage-tooltips") {
            //get the x and y coordinates of the click
            const x = e.nativeEvent.offsetX;
            const y = e.nativeEvent.offsetY;

            //convert to percentage
            const xPercent = (x / e.target.offsetWidth) * 100;
            const yPercent = (y / e.target.offsetHeight) * 100;

            onEventChange('click', 'add-hotspot', {
                top: yPercent,
                left: xPercent,
                offsetX: x,
                offsetY: y,
            })
        }
        else if (e.target.id.includes("hotspotimage-pin")) {
            const id = e.target.id.substring(17);
            const currentPinData = hotspots.find(hotspot => hotspot.id == id);
            if (currentPinData) {
                onEventChange('click', 'edit-hotspot', Object.assign({}, currentPinData, {
                    offsetX: e.nativeEvent.offsetX,
                    offsetY: e.nativeEvent.offsetY,
                }));
            }

        }

        //if a pin in pressed in mobile view
        if (e.target.id.includes("hotspotimage-pin") && mobileView) {
            setSelectedTooltip(e.target.id);
        }
        else if (e.target.id === "hotspotimage-tooltips" && mobileView) {
            setSelectedTooltip(null);
        }
    }

    return (
        <div style={{
            padding: '0px',
            margin: '0px',
            boxSizing: 'border-box',
        }}>
            {/* Mobile and Tablet View */}
            {
                mobileView && (
                    <div className="hotspotimage-section-mobile">
                        <div id="hotspotimage-container" className="hotspotimage-container-mobile" onClick={onClickEvent} style={{
                            width: '100%',
                        }}>
                            <img
                                src={image}
                                alt=""
                                style={imageStyles}
                            />
                            <div id='hotspotimage-tooltips' className="hotspotimage-tooltips-mobile" >
                                {
                                    hotspots.map((hotspot, index) => (
                                        <div key={hotspot.id}>
                                            <CustomWidthTooltipMobile
                                                open={`hotspotimage-pin-${hotspot.id}` === selectedTooltip}
                                                componentsProps={{
                                                    tooltip: {
                                                        sx: {
                                                            bgcolor: 'common.white',
                                                            '& .MuiTooltip-arrow': {
                                                                color: 'common.white',
                                                            },
                                                        },
                                                    },
                                                }} title={(
                                                    <div onClick={() => {
                                                        if (hotspot.action.hasAction) {
                                                            window.open(hotspot.action.url, '_blank');
                                                        }
                                                    }} >
                                                        <Typography variant="body2" fontWeight={'bold'} style={{
                                                            color: 'black'
                                                        }}>
                                                            {hotspot.title}
                                                        </Typography>
                                                        <Divider
                                                            style={{
                                                                marginBottom: 10,
                                                                marginTop: 2
                                                            }}
                                                        />
                                                        <Grid container spacing={1}>
                                                            {
                                                                (hotspot.image) ?
                                                                    <Grid item xs={12} md={8} lg={8} style={{
                                                                        textAlign: 'justify',
                                                                    }}>
                                                                        <Typography variant="caption" style={{
                                                                            color: 'black'
                                                                        }}>
                                                                            {
                                                                                hotspot.description.length > 50 ? hotspot.description.substring(0, 50) + "..." : hotspot.description
                                                                            }
                                                                        </Typography>
                                                                    </Grid>
                                                                    :
                                                                    <Grid item xs={12} md={12} lg={12} style={{
                                                                        textAlign: 'justify',
                                                                        padding: 10
                                                                    }}>
                                                                        <Typography variant="caption" style={{
                                                                            color: 'black'
                                                                        }}>
                                                                            {
                                                                                hotspot.description.length > 50 ? hotspot.description.substring(0, 50) + "..." : hotspot.description
                                                                            }
                                                                        </Typography>
                                                                    </Grid>
                                                            }

                                                        </Grid>
                                                    </div>
                                                )} >
                                                <div
                                                    id={`hotspotimage-pin-${hotspot.id}`}
                                                    className="hotspotimage-pin-mobile" style={{
                                                        //x and y coordinates of the hotspot
                                                        left: hotspot.position.left,
                                                        top: hotspot.position.top,
                                                    }}
                                                />
                                            </CustomWidthTooltipMobile>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }


            {/* Desktop View */}
            {
                !mobileView && (
                    <div className="hotspotimage-section" style={{
                        // backgroundColor: 'yellow',
                    }}>
                        <div id="hotspotimage-container" className="hotspotimage-container" onClick={onClickEvent} style={{
                            // backgroundColor: 'purple',
                            width: '100%',
                        }}>
                            <img
                                src={image}
                                alt=""
                                style={imageStyles}
                            />
                            <div id='hotspotimage-tooltips' className="hotspotimage-tooltips" >
                                {
                                    hotspots.map((hotspot, index) => (
                                        <div key={hotspot.id}>
                                            <CustomWidthTooltip componentsProps={{
                                                tooltip: {
                                                    sx: {
                                                        bgcolor: 'common.white',
                                                        '& .MuiTooltip-arrow': {
                                                            color: 'common.white',
                                                        },
                                                    },
                                                },
                                            }} title={(
                                                <div >
                                                    <Typography variant="body2" fontWeight={'bold'} style={{
                                                        color: 'black'
                                                    }}>
                                                        {hotspot.title}
                                                    </Typography>
                                                    <Divider
                                                        style={{
                                                            marginBottom: 10,
                                                            marginTop: 2
                                                        }}
                                                    />
                                                    <Grid container spacing={1}>
                                                        {
                                                            (hotspot.image) ?
                                                                <>
                                                                    <Grid item xs={12} md={4} lg={4}>
                                                                        <img
                                                                            src={hotspot.image}
                                                                            alt=""
                                                                            style={{
                                                                                width: '100%',
                                                                                height: '100%'
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                    <Grid item xs={12} md={8} lg={8} style={{
                                                                        textAlign: 'justify',
                                                                        padding: 10
                                                                    }}>
                                                                        <Typography variant="caption" style={{
                                                                            color: 'black'
                                                                        }}>
                                                                            {
                                                                                hotspot.description.length > 100 ? hotspot.description.substring(0, 100) + "..." : hotspot.description
                                                                            }
                                                                        </Typography>
                                                                    </Grid>
                                                                </>
                                                                :
                                                                <>
                                                                    <Grid item xs={12} md={12} lg={12} style={{
                                                                        textAlign: 'justify',
                                                                        padding: 10
                                                                    }}>
                                                                        <Typography variant="caption" style={{
                                                                            color: 'black'
                                                                        }}>
                                                                            {
                                                                                hotspot.description.length > 100 ? hotspot.description.substring(0, 100) + "..." : hotspot.description
                                                                            }
                                                                        </Typography>
                                                                    </Grid>
                                                                </>
                                                        }

                                                    </Grid>

                                                    {
                                                        hotspot.action.hasAction && (
                                                            <Stack spacing={1} direction="column" justifyContent="flex-end" alignItems="flex-end" mt={1}>
                                                                {/* Open link in new tab */}
                                                                <Button size="small" variant="text" color="info" onClick={() => {
                                                                    window.open(hotspot.action.url, '_blank');
                                                                }} endIcon={<i className="material-icons">{hotspot.action.icon}</i>}>
                                                                    {hotspot.action.label}
                                                                </Button>
                                                            </Stack>
                                                        )
                                                    }
                                                </div>
                                            )} placement="top">
                                                <div
                                                    id={`hotspotimage-pin-${hotspot.id}`}
                                                    className="hotspotimage-pin" style={{
                                                        //x and y coordinates of the hotspot
                                                        left: hotspot.position.left,
                                                        top: hotspot.position.top,
                                                    }}
                                                />
                                            </CustomWidthTooltip>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

// Typechecking props for the ImageHotspotViewerComponent
ImageHotspotViewerComponent.propTypes = {
    image: PropTypes.node.isRequired,
    hotspots: PropTypes.array,
    imageStyles: PropTypes.object,
    onEventChange: PropTypes.func
};

// Default props for the ImageHotspotViewerComponent
ImageHotspotViewerComponent.defaultProps = {
    hotspots: [],
    imageStyles: {},
    onEventChange: () => { }
}

