import React, { useState } from "react";
import './Products.css';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Bolts from '../../assets/images/SCREWS-BOLTS.png';
import Carriage_bolt_DIN603 from '../../assets/images/BOLTS/Carriage_bolt_DIN603.jpg';
import carriage_bolt_fully_threaded_DIN603 from '../../assets/images/BOLTS/carriage_bolt_fully_threaded_DIN603.jpg';
import carriage_bolt_mushroom_head_DIN933 from '../../assets/images/BOLTS/carriage_bolt_mushroom_head_DIN933.jpg';
import elevator_bolt from '../../assets/images/BOLTS/elevator_bolt.jpg';
import eye_bolt from '../../assets/images/BOLTS/eye_bolt.jpg';
import eye_lags from '../../assets/images/BOLTS/eye_lags.jpg';
import hanger_bolt from '../../assets/images/BOLTS/hanger_bolt.jpg';
import hex_bolt_DIN933 from '../../assets/images/BOLTS/hex_bolt_DIN933.jpg';
import hexagon_fit_bolt_DIN609 from '../../assets/images/BOLTS/hexagon_fit_bolt_DIN609.jpg';
import hexagon_flange_fully_threaded_DIN6921 from '../../assets/images/BOLTS/hexagon_flange_fully_threaded_DIN6921.jpg';
import hexagon_head_DIN931 from '../../assets/images/BOLTS/hexagon_head_DIN931.jpg';
import hexagon_head_DIN960 from '../../assets/images/BOLTS/hexagon_head_DIN960.jpg';
import hexagonal_socket_head_DIN931 from '../../assets/images/BOLTS/hexagonal_socket_head_DIN931.jpg';
import j_bolts from '../../assets/images/BOLTS/j_bolts.jpg';
import sex_bolt from '../../assets/images/BOLTS/sex_bolt.jpg';
import shoulder_bolt from '../../assets/images/BOLTS/shoulder_bolt.jpg';
import timber_bolt from '../../assets/images/BOLTS/timber_bolt.jpg';
import u_bolt from '../../assets/images/BOLTS/u_bolt.jpg';
import cotter_pin from '../../assets/images/BOLTS/cotter_pins.jpg';
import machine_screw_din7985 from '../../assets/images/BOLTS/machine_scre_din7985.jpg';
import countersunk_head_with_slot from '../../assets/images/SCREWS/countersunk_head_with_slot.jpg';
import CR_Countersunk_Head from '../../assets/images/SCREWS/CR_Countersunk_Head.jpg';
import CR_Pan_Head_Collar from '../../assets/images/SCREWS/CR_Pan_Head_Collar.jpg';
import CR_Pan_Head from '../../assets/images/SCREWS/CR_Pan_Head.jpg';
import CR_Raised_Countersunk_Head from '../../assets/images/SCREWS/CR_Raised_Countersunk_Head.jpg';
import CR_recessed_round_head_wood from '../../assets/images/SCREWS/CR_recessed_round_head_wood.jpg';
import fillister_head from '../../assets/images/SCREWS/fillister_head.jpg';
import Flat_countersunk_hi_low_thread from '../../assets/images/SCREWS/Flat_countersunk_hi_low_thread.jpg';
import Hexagonal_Head_wood from '../../assets/images/SCREWS/Hexagonal_Head_wood.jpg';
import pan_head_with_slot from '../../assets/images/SCREWS/pan_head_with_slot.jpg';
import phillips_washer_head from '../../assets/images/SCREWS/phillips_washer_head.jpg';
import Pozi_Countersunk_Head_Nail_Screw from '../../assets/images/SCREWS/Pozi_Countersunk_Head_Nail_Screw.jpg';
import raised_countersunk_with_slot from '../../assets/images/SCREWS/raised_countersunk_with_slot.jpg';
import slotted_countersunk_head_wood from '../../assets/images/SCREWS/slotted_countersunk_head_wood.jpg';
import Slotted_oval_sountersunk_wood from '../../assets/images/SCREWS/Slotted_oval_sountersunk_wood.jpg';
import slotted_round_head_wood from '../../assets/images/SCREWS/slotted_round_head_wood.jpg';
import Torx_countersunk from '../../assets/images/SCREWS/Torx_countersunk.jpg';
import mac_DIN85 from '../../assets/images/MACHINE_SCREWS/mac_DIN85.jpg';
import mac_DIN963 from '../../assets/images/MACHINE_SCREWS/mac_DIN963.jpg';
import mac_DIN964 from '../../assets/images/MACHINE_SCREWS/mac_DIN964.jpg';
import mac_DIN965 from '../../assets/images/MACHINE_SCREWS/mac_DIN965.jpg';
import mac_DIN966 from '../../assets/images/MACHINE_SCREWS/mac_DIN966.jpg';
import mac_DIN7985 from '../../assets/images/MACHINE_SCREWS/mac_DIN7985.jpg';
import thread_rod from '../../assets/images/MACHINE_SCREWS/thread_rod.jpg';
import cap_nuts_DIN1587 from '../../assets/images/NUTS/cap_nuts_DIN1587.jpg';
import hex_coupling_nuts from '../../assets/images/NUTS/hex_coupling_nuts.jpg';
import hex_nut_flange_DIN6923 from '../../assets/images/NUTS/hex_nut_flange_DIN6923.jpg';
import hex_nut_steel_lock_DIN985 from '../../assets/images/NUTS/hex_nut_steel_lock_DIN985.jpg';
import hex_nuts_DIN934 from '../../assets/images/NUTS/hex_nuts_DIN934.jpg';
import hex_slotted_nuts_DIN935 from '../../assets/images/NUTS/hex_slotted_nuts_DIN935.jpg';
import hex_weld_nuts_DIN929 from '../../assets/images/NUTS/hex_weld_nuts_DIN929.jpg';
import round_bearing_nut from '../../assets/images/NUTS/round_bearing_nut.jpg';
import square_nuts_DIN557 from '../../assets/images/NUTS/square_nuts_DIN557.jpg';
import square_nuts_DIN562 from '../../assets/images/NUTS/square_nuts_DIN562.jpg';
import square_weld_nuts_DIN928 from '../../assets/images/NUTS/square_weld_nuts_DIN928.jpg';
import wing_nuts_DIN315 from '../../assets/images/NUTS/wing_nuts_DIN315.jpg';
import flat_washer_DIN125 from '../../assets/images/WASHERS/flat_washer_DIN125.jpg';
import flat_washer_DIN126 from '../../assets/images/WASHERS/flat_washer_DIN126.jpg';
import flat_washer_DIN9021 from '../../assets/images/WASHERS/flat_washer_DIN9021.jpg';
import spring_washer_DIN127B from '../../assets/images/WASHERS/spring_washer_DIN127B.jpg';
import spring_washer_DIN7980 from '../../assets/images/WASHERS/spring_washer_DIN7980.jpg';
import square_washer from '../../assets/images/WASHERS/square_washer.jpg';
import countersunk_head_semi_tubular_rivert from '../../assets/images/RIVETS/countersunk_head_semi_tubular_rivert.jpg';
import cup_head_shoulder_rivert from '../../assets/images/RIVETS/cup_head_shoulder_rivert.jpg';
import open_end_rivert from '../../assets/images/RIVETS/open_end_rivert.jpg';
import round_head_solid_rivert from '../../assets/images/RIVETS/round_head_solid_rivert.jpg';
import snap_joint_rivert from '../../assets/images/RIVETS/snap_joint_rivert.jpg';
import socket_cup_head_rivert from '../../assets/images/RIVETS/socket_cup_head_rivert.jpg';
import solid_rivet from '../../assets/images/RIVETS/solid_rivet.jpg';






function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Products = () => {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="main-Product">
                <div className="productbg container">
                    <h1>PRODUCTS</h1>
                    <p style={{ marginTop: "10px" }}><Link to="/">Home</Link>  » Products </p>
                </div>
                <div className="product-tabs">
                    <Box
                        sx={{
                            flexGrow: 1,
                            bgcolor: 'background.paper',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            height: isMobile ? 'auto' : '100%',
                            // overflowY: isMobile ? 'visible' : 'scroll',

                        }}
                    >
                        <Tabs
                            orientation={isMobile ? 'horizontal' : 'vertical'}
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Product tabs"
                            sx={{
                                borderRight: isMobile ? 0 : 1,
                                borderBottom: isMobile ? 1 : 0,
                                borderColor: 'divider',
                                width: isMobile ? '100%' : 'auto',
                                marginBottom: isMobile ? 2 : 0,

                            }}
                            className="container"
                        >
                            <Tab label="Bolts" {...a11yProps(0)} className="tabhead" />
                            <Tab label="Screws" {...a11yProps(1)} className="tabhead" />
                            <Tab label="Machine Screws" {...a11yProps(2)} className="tabhead" />
                            <Tab label="Nuts" {...a11yProps(3)} className="tabhead" />
                            <Tab label="Washers" {...a11yProps(4)} className="tabhead" />
                            <Tab label="Rivets" {...a11yProps(5)} className="tabhead" />
                        </Tabs>
                        <TabPanel value={value} index={0} height="100vh">
                            <div class="grid-container">
                                <div class="grid-box">
                                    <img src={Carriage_bolt_DIN603} className="product_image" alt="" />
                                    <div className="img-name"><p>Carriage Bolt DIN 603</p></div>
                                    <div className="prod-caption-div">
                                        <p>Carriage bolts were developed for use through iron strengthening plates on either side of a wooden beam. It is commonplace though to use them into bare timber, the squared section giving enough grip to prevent rotation.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={carriage_bolt_fully_threaded_DIN603} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"> <p>Carriage Bolt Fully Threaded DIN 603</p></div>
                                    <div className="prod-caption-div">
                                        <p>The DIN 603 Carriage Bolt, available in both half thread and full thread options, is an essential fastening solution designed to securely join materials and components in various applications.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={carriage_bolt_mushroom_head_DIN933} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Carriage Bolt Mushroom Head DIN 933</p></div>
                                    <div className="prod-caption-div">
                                        <p>Carriage head bolts with a mushroom head and DIN 933 standard are used to fasten wheels to cars and trucks, and to secure other materials together</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={elevator_bolt} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Elevator Bolt</p></div>
                                    <div className="prod-caption-div">
                                        <p>Elevator bolts are threaded fasteners used to hold things together in place, such as in elevators, conveyor belts, and furniture.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={eye_bolt} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Eye Bolt</p></div>
                                    <div className="prod-caption-div">
                                        <p>A bolt with a circular ring on the head end. used for attaching a rope or chain.Eye bolts are used to create secure attachment points for lifting, anchoring, and securing loads.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={eye_lags} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Eye Lags</p></div>
                                    <div className="prod-caption-div">
                                        <p>Similar to Eye bolt but with wood threads instead of machine thread. Eye lags, also known as lag bolts or eye screws, are used to connect materials that need to support heavy loads.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hanger_bolt} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hanger Bolts</p></div>
                                    <div className="prod-caption-div">
                                        <p>Hanger bolts have wood thread on one end and machine thread on the other end that are used to connect metal objects to wood.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hex_bolt_DIN933} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Head Bolts DIN 933</p></div>
                                    <div className="prod-caption-div">
                                        <p>DIN 933 hexagonal head bolts are used in many industries, including construction, automotive, and machinery.They are often used in applications that require a high clamping load and the ability to change the bolt length.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hexagon_fit_bolt_DIN609} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Fit Bolt DIN 609</p></div>
                                    <div className="prod-caption-div">
                                        <p>DIN 609 hexagon fit bolts are used in a variety of applications, including construction, engineering, and automotive. They are used to secure objects in place and absorb forces.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hexagon_flange_fully_threaded_DIN6921} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Flange Full Thread DIN 6921</p></div>
                                    <div className="prod-caption-div">
                                        <p> Hexagonal Flange Full Thread DIN 6921 allows built-up forces under the bolt head to be spread over a larger area, resulting in lower surface pressure. .</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hexagon_head_DIN931} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Head DIN 931</p></div>
                                    <div className="prod-caption-div">
                                        <p>Hexagonal Head DIN 931 is used to secure joints, fasten frames, and repair buildings and bridges.It is designed to be tightened or loosened using a hexagonal wrench or socket. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hexagon_head_DIN960} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Head DIN 960</p></div>
                                    <div className="prod-caption-div">
                                        <p>Hexagonal Head DIN 960 are used to connect and secure parts and structures in many industries, including construction, manufacturing, and automotive.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hexagonal_socket_head_DIN931} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Socket Head DIN 931</p></div>
                                    <div className="prod-caption-div">
                                        <p>Hexagonal socket head DIN 931 bolts are used in a variety of industries, including construction, machinery, and automotive. They are known for their strength and durability, and are often used for heavy-duty tasks.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={j_bolts} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>J Bolts</p></div>
                                    <div className="prod-caption-div">
                                        <p>J Shaped Bolts are used for tie-dowms or as an open eye bolt and  for a variety of purposes, including construction, roofing, and securing equipment.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={sex_bolt} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Sex Bolts</p></div>
                                    <div className="prod-caption-div">
                                        <p>Sex Bolts (a.k.a. barrel nuts or chicago bolts) have a female thread and are used for through boulting applications where a head is desired on both side of joint.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={shoulder_bolt} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Shoulder Bolts</p></div>
                                    <div className="prod-caption-div">
                                        <p>Shoulder bolts (also known as stripper bolts) are used to create a pivot point and are often used in industries that require precision.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={timber_bolt} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Timber Bolts</p></div>
                                    <div className="prod-caption-div">
                                        <p>Machine threaded fasteners with a  wide domed head. the head has fins underneath that prevent the bolt from spinning during installation.Typically used in wood.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={u_bolt} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>U Bolts</p></div>
                                    <div className="prod-caption-div">
                                        <p>Bolts in U Shape for attaching to pipe or other round surfaces. Also available with a square bend.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={machine_screw_din7985} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Machine Screw DIN 7985</p></div>
                                    <div className="prod-caption-div">
                                        <p>DIN 7985 - pan head screws - galvanized screw -china..DIN 7985 machine screws are used in many industries, including automotive, construction, and electronics. They are used to join surfaces, attach hinges, and assemble components.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={cotter_pin} className="product_image" width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Cotter PIN</p></div>
                                    <div className="prod-caption-div">
                                        <p>Cotter pins are used to secure parts together in many industries, including automotive, aerospace, and agriculture. They are often used in high-stress situations where other fasteners may be subject to vibration.</p>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div class="grid-container">
                                <div class="grid-box">
                                    <img src={countersunk_head_with_slot} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Raised Countersunk Head with Slot</p></div>
                                    <div className="prod-caption-div">
                                        <p>Raised countersunk head tapping screws with slots are used to attach wood to wood, in handles, hinges, and locks. They can also be used for flooring installation. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={CR_Countersunk_Head} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Cross Recessed Countersunk Head</p></div>
                                    <div className="prod-caption-div">
                                        <p>A cross recessed countersunk head screw is primarily used when a flush finish is required, meaning the screw head sits completely level with the surface, making it ideal for applications like woodworking projects, furniture. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={CR_Pan_Head_Collar} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Cross Recessed Pan Head Tapping Screw with Collor</p></div>
                                    <div className="prod-caption-div">
                                        <p>Cross recessed pan head tapping screws are a type of fastener commonly used in various applications for joining two or more components together. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={CR_Pan_Head} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Cross Recessed Pan Head Tapping Screw</p></div>
                                    <div className="prod-caption-div">
                                        <p>Cross recessed pan head tapping screws are used to fasten objects to thin metal, wood, or plastic. They are also known as sheet metal screws. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={CR_Raised_Countersunk_Head} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Cross Recessed Raised Countersunk Head</p></div>
                                    <div className="prod-caption-div">
                                        <p>A raised countersunk head screw is primarily used when you need a screw that sits flush with the surface while still having a slightly raised center on the head, often seen in applications like woodworking where a smooth surface is desired. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={CR_recessed_round_head_wood} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Cross Recessed Round Head Wood Screw</p></div>
                                    <div className="prod-caption-div">
                                        <p>Cross recessed round head wood screws are used in a variety of woodworking projects, including furniture assembly, cabinetry, and DIY projects. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={fillister_head} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Fillister Head Self-Tapping Drilling Screw</p></div>
                                    <div className="prod-caption-div">
                                        <p>Fillister head screws are used in a variety of fastening applications. They are commonly found in high-precision devices, such as microscopes, cameras and even medical equipment.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={Flat_countersunk_hi_low_thread} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Flat Countersunk Head Hi-low thread Self-Tapping Screw</p></div>
                                    <div className="prod-caption-div">
                                        <p>Flat countersunk head self-tapping screws are used to fasten components to wood or metal in applications where a flush finish is required.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={Hexagonal_Head_wood} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Head Wood Screws</p></div>
                                    <div className="prod-caption-div">
                                        <p>Hex washer head screws are often used for fastening wood to wood due to their strong grip and stability. Attaching Metal to Wood: These screws can also be used to secure metal pieces to wooden structures, so they are versatile for various projects. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={pan_head_with_slot} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Pan Head Tapping Screws with slot</p></div>
                                    <div className="prod-caption-div">
                                        <p>Pan head tapping screws with a slot are used for fastening metal components, securing insulation, and fastening wood and plywood.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={phillips_washer_head} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Phillips Washer Head Self-Tapping Screw</p></div>
                                    <div className="prod-caption-div">
                                        <p>Phillips Pan Washer Head Self Tapping Screw can be used in sheet metal and timber-to-metal applications. The tensile strength of this screw allows it to be used in high load applications as well.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={raised_countersunk_with_slot} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Raised Countersunk Head Tapping Screw with Slot</p></div>
                                    <div className="prod-caption-div">
                                        <p>Raised countersunk head tapping screws with slots are used for attaching wood to wood, in hinges, handles, and locks. They can also be used for flooring installation.  </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={slotted_countersunk_head_wood} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Slotted Countersunk Head Wood Screw</p></div>
                                    <div className="prod-caption-div">
                                        <p>Slotted countersunk head wood screws are used in woodworking for a smooth, flush finish. They are ideal for furniture assembly, carpentry, and general woodworking.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={slotted_round_head_wood} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Slotted Round Head Wood Screw</p></div>
                                    <div className="prod-caption-div">
                                        <p>When it comes to cabinetmaking, round head wood screws are often used to attach joints, hinges, and other hardware.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={Torx_countersunk} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Torx Drive Countersunk Head Chipboard</p></div>
                                    <div className="prod-caption-div">
                                        <p>It can be used in furniture assembly, cabinet construction, interior joinery, shelving systems, laminate flooring installation, and many other carpentry projects where chipboard or particle board is involved. </p>
                                    </div>
                                </div>

                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div class="grid-container">
                                <div class="grid-box">
                                    <img src={mac_DIN85} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Machine Screw DIN 85</p></div>
                                    <div className="prod-caption-div">
                                        <p>A DIN 85 machine screw, also known as a "slotted pan head machine screw", is primarily used for fastening metal components in various applications like manufacturing, electrical systems, automotive parts, and general construction.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={mac_DIN963} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Machine Screw DIN 963</p></div>
                                    <div className="prod-caption-div">
                                        <p>DIN 963 Machine Screws are used in the machine-building, industrial and manufacturing industries. It is also used for the manufacture of furniture for reliable fixation of structural parts.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={mac_DIN964} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Machine Screw DIN 964</p></div>
                                    <div className="prod-caption-div">
                                        <p>A DIN 964 machine screw is primarily used for fastening metal components together where a flush, countersunk finish is required, often in applications where a clean aesthetic is desired.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={mac_DIN965} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Machine Screw DIN 965</p></div>
                                    <div className="prod-caption-div">
                                        <p>Machine screw conforming to DIN 965 standard is primarily used for applications where a flat, countersunk head is required, meaning the screw sits flush with the surface it's fastening to, making it ideal for applications.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={mac_DIN966} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Machine Screw DIN 966</p></div>
                                    <div className="prod-caption-div">
                                        <p>Metric DIN 966 is a cross recessed (Phillips) raised countersunk (oval) head machine screws. Metric machine screws are designed for metal to metal applications requiring a pre-drilled hole and a mating metric nut or the screw to thread into.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={mac_DIN7985} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Machine Screw DIN 7985</p></div>
                                    <div className="prod-caption-div">
                                        <p>A machine screw conforming to DIN 7985 standard is primarily used for fastening sheet metal parts together, commonly found in applications like construction, industrial machinery, automotive assembly, electronics, and furniture.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={thread_rod} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Thread Rods</p></div>
                                    <div className="prod-caption-div">
                                        <p>Threaded rods are used in many industries, including construction, manufacturing, and automotive. They are used to support, suspend, or brace components, and to adjust tension or position.</p>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <div class="grid-container">
                                <div class="grid-box">
                                    <img src={cap_nuts_DIN1587} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Cap Nuts DIN 1587</p></div>
                                    <div className="prod-caption-div">
                                        <p>This is mostly used to protect objects close to the ends of screws from scratches and structural injuries. It also reduces the effects of physical mishaps on human skin if it somehow forcefully hits the fasteners.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hex_coupling_nuts} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Coupling Nuts</p></div>
                                    <div className="prod-caption-div">
                                        <p>Coupling nuts are elongated hexagonal nuts used to connect two threaded rods or bolts, typically of the same size. They are commonly utilized in applications that require extending the length of a bolted connection.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hex_nut_flange_DIN6923} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Hexagonal Nut Flange DIN 6923</p></div>
                                    <div className="prod-caption-div">
                                        <p>They are used to spread the load evenly to avoid uneven fastening surface of the operations. They also ensure that the fasteners are in place without moving about loosely.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hex_nut_steel_lock_DIN985} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Hexgonal Nut Steel Lock DIN 985</p></div>
                                    <div className="prod-caption-div">
                                        <p>The hexagon nylon lock nut is intended for installation where a certain degree of joint locking is required. Nylon lock nuts in DIN 985 are currently the most common lock nut on the market.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hex_nuts_DIN934} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Nuts DIN 934  </p></div>
                                    <div className="prod-caption-div">
                                        <p>Hexagonal nuts conforming to DIN 934 standard are commonly used in a wide range of applications, including construction, automotive, and machinery, to securely fasten parts together by screwing onto a bolt due to their versatile design.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hex_slotted_nuts_DIN935} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Slotted Nut DIN 935 </p></div>
                                    <div className="prod-caption-div">
                                        <p>DIN 935 Brass Slotted Castle Nuts are widely used in the automotive, aerospace and engineering sectors, as well as for applications where vibration would result in a loose fixing.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={hex_weld_nuts_DIN929} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Hexagonal Weld Nuts DIN 929</p></div>
                                    <div className="prod-caption-div">
                                        <p>Hex weld nuts from ITA Fasteners are used to weld the nut onto a host material. They come with small three leg projections which are used to weld the nut into the material.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={round_bearing_nut} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Round Bearing Nuts</p></div>
                                    <div className="prod-caption-div">
                                        <p>Round bearing nuts, also known as bearing lock nuts or shaft ring nuts, are used to secure bearings, gears, and pulleys to shafts.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={square_nuts_DIN557} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Square Nuts DIN 557</p></div>
                                    <div className="prod-caption-div">
                                        <p>Square nuts conforming to DIN 557 standard are primarily used in applications where a high level of torque resistance and secure fastening is required, often in situations where a component needs to be firmly secured within a slot or channel, like in machinery.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={square_nuts_DIN562} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Square Nuts DIN 562</p></div>
                                    <div className="prod-caption-div">
                                        <p>Square nuts conforming to DIN 562 are primarily used in machine building, construction, and instrument engineering to securely connect fasteners in situations with high vibration, dynamic impact.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={square_weld_nuts_DIN928} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Square Weld Nuts DIN 928 </p></div>
                                    <div className="prod-caption-div">
                                        <p>A Square Weld Nut DIN 928 is primarily used in industrial applications where a strong, permanent threaded connection needs to be welded directly onto a metal surface.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={wing_nuts_DIN315} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Wing Nuts DIN 315</p></div>
                                    <div className="prod-caption-div">
                                        <p>In its crux, this fastener can be used in applications like machine adjustment knobs where easy and quick access is required.</p>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <div class="grid-container">
                                <div class="grid-box">
                                    <img src={flat_washer_DIN125} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Flat Washers DIN 125</p></div>
                                    <div className="prod-caption-div">
                                        <p>A DIN 125 flat washer is primarily used to distribute the load of a bolt or screw across a larger surface area, preventing damage to the material being fastened, particularly when working with softer materials.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={flat_washer_DIN126} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Flat Washers DIN 126</p></div>
                                    <div className="prod-caption-div">
                                        <p>DIN 126 Metric Coarse Flat Washers are round discs with round holes that provide a smooth bearing surface when used under the head of a hex head bolt or hex nut.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={flat_washer_DIN9021} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Flat Washers DIN 9021</p></div>
                                    <div className="prod-caption-div">
                                        <p>Flat washers conforming to DIN 9021 are primarily used to distribute the load of a fastener over a larger surface area, preventing damage to the material being fastened by concentrating the pressure on a smaller point.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={spring_washer_DIN127B} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Spring Washers DIN 127B</p></div>
                                    <div className="prod-caption-div">
                                        <p> DIN 127B spring washer, also known as a split lock washer, is primarily used to prevent nuts and bolts from loosening due to vibration by creating friction between the fastener and the mating surface.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={spring_washer_DIN7980} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Spring Washers DIN 7980</p></div>
                                    <div className="prod-caption-div">
                                        <p>The DIN 7980 spring washer is a washer that has been specially developed for use in conjunction with screws or bolts. They are used to secure a connection and prevent a screw from loosening unintentionally.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={square_washer} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Square Washers</p></div>
                                    <div className="prod-caption-div">
                                        <p>Square washers are flat washers with a square shape that have a larger surface area than round washers. They are thick and broad to protect against damage to wood fibers.</p>
                                    </div>
                                </div>

                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <div class="grid-container">
                                <div class="grid-box">
                                    <img src={countersunk_head_semi_tubular_rivert} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Countersunk head semi-tubular Rivets </p></div>
                                    <div className="prod-caption-div">
                                        <p>Countersunk head semi-tubular rivets are used to join two pieces of material, and are ideal for applications that require a smooth, finished surface.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={cup_head_shoulder_rivert} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Cup Head Shoulder Rivet</p></div>
                                    <div className="prod-caption-div">
                                        <p>Semi-tubular rivets offer a 12 point design with up to 21% greater clamp load in an equal size head. Using the cold forming method, this 12 point bolt can be crafted from a variety of materials.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={open_end_rivert} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Open End Rivet</p></div>
                                    <div className="prod-caption-div">
                                        <p>An open end rivet is a commonly used, general-purpose blind rivet, ideal for fastening materials together in applications like sheet metal fabrication, component assembly, attaching hinges.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={round_head_solid_rivert} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p>Round Head Solid Rivet </p></div>
                                    <div className="prod-caption-div">
                                        <p>A round head solid rivet is primarily used in applications where a strong, reliable, and permanent joint is needed, typically in construction, shipbuilding, and industrial machinery.</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={snap_joint_rivert} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Snap Joint Rivet</p></div>
                                    <div className="prod-caption-div">
                                        <p>A "snap joint rivet," also called a "snap rivet" or "pop rivet," is used to join two pieces of material together when access to only one side is available, providing a strong, neat finish</p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={socket_cup_head_rivert} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Socket Cup Head Rivet</p></div>
                                    <div className="prod-caption-div">
                                        <p>Socket cup head rivets, also known as blind rivets or cup rivets, are used to create water-tight connections in a variety of applications. </p>
                                    </div>
                                </div>
                                <div class="grid-box">
                                    <img src={solid_rivet} width="100%" height="100%" alt="" />
                                    <div className="img-name"><p> Solid Rivet</p></div>
                                    <div className="prod-caption-div">
                                        <p>Socket rivets are used to join two or more materials together. They are versatile and reliable, and are used in many industries. </p>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Products