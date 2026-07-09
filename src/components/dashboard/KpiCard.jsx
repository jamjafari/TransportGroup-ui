import {
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/material";

function KpiCard({
    title,
    value,
    icon,
    color = "#1976d2"
})
{
    return (
        <Card
            elevation={3}
            sx={{
                borderRadius: 3,
                height: "100%"
            }}
        >
            <CardContent>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >

                    <Box>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            mt={1}
                        >
                            {value}
                        </Typography>

                    </Box>

                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: "50%",
                            backgroundColor: color,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white"
                        }}
                    >
                        {icon}
                    </Box>

                </Box>

            </CardContent>
        </Card>
    );
}

export default KpiCard;