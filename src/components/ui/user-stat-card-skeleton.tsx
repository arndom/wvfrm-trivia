import { Box, Skeleton } from "@mui/material";

const UserStatCardSkeleton = () => (
  <Box
    className="stat-card-skeleton"
    sx={{
      paddingY: 2,
      paddingLeft: { xs: 2, sm: 3 },
      paddingRight: { xs: 2, sm: 4 },
      display: "flex",
      alignItems: "center",
      gap: 1
    }}
  >
    <Skeleton
      variant="circular"
      sx={{
        width: { xs: 30, md: 40 },
        height: { xs: 30, md: 40 }
      }}
    />

    <Box>
      <Skeleton
        variant="text"
        sx={{ fontSize: { xs: "0.75rem", sm: "1rem" }, mb: 1 }}
      />
      <Skeleton variant="rounded" width={137} height={24} />
    </Box>
  </Box>
);

export default UserStatCardSkeleton;
