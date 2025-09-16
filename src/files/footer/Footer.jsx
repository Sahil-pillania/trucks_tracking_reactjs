import * as React from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";

import footerBanner from "../../assets/Images/footer_branding.jpg";

export default function ColorInversionFooter() {
  const [color, setColor] = React.useState("neutral");
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={[
        {
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: "sm" },
        },
        color !== "neutral" && {
          bgcolor: `${color}.800`,
        },
      ]}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = [
              "primary",
              "neutral",
              "danger",
              "success",
              "warning",
            ];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Card
          className="roboto_font"
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: "row", md: "column" },
            minWidth: { xs: "100%", md: "auto" },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: "initial" } }}
          >
            <img alt="" src={footerBanner} />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Truck Tracking</Typography>
            <Typography level="body-xs">
              &copy; 2025 Trucks Tracking. All rights reserved.
            </Typography>
          </CardContent>
        </Card>

        <List
          className="roboto_font"
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, "--ListItem-radius": "8px" }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>Pages</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>
                  <a className="footer_links" href="/services">
                    Services
                  </a>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <a className="footer_links" href="/about">
                    About Us
                  </a>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  {" "}
                  <a className="footer_links" href="/contact">
                    Contact Us
                  </a>
                </ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          {/* <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>Products</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>MUI Base</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem> */}
        </List>
      </Box>
    </Sheet>
  );
}
