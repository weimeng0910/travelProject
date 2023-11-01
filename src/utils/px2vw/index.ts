/*
 * @Date: 2023-10-20 11:23:36
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-24 17:55:29
 * @FilePath: /travelProject/src/utils/px2vw/index.ts
 * @Description: px2vw
 */

export const px2vw = (size: number, width: number = 1440) => `${(size / width) * 100}vw`;

