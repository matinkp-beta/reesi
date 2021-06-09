import cv2

# read two images
src1 = cv2.imread('./image.png', cv2.IMREAD_COLOR)
src2 = cv2.imread('./frame.png', cv2.IMREAD_COLOR)

# add or blend the images
dst = cv2.addWeighted(src1, 1, src2, 1, 0.0)

# save the output image
cv2.imwrite('imagetest.png', dst)