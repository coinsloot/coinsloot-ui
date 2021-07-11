import { ReactChild } from "react";

export interface ElevationProps {
    /**
     * Override component classname
     */
     className?: string
    /**
     * Elevation height
     */
    height?: 1 | 2 | 3 | 4 | 5
    /**
     * Elevation round corners
     */
     round?: boolean
    /**
     * Elevation content
     */
    children: ReactChild
  }