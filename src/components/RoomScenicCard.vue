<template>
    <div class="room-scenic-1">
        <img :src="roomScenicImage" class="room-scenic-img">
        <div class="room-scenic-summary">
            <span class="sc-1-summary--roomScenicTitle">{{ roomScenicTitle }}</span>
            <span class="sc-1-summary--roomScenicPrice">{{ roomScenicPriceEffect }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'roomScenicImage', 'roomScenicTitle', 'roomScenicPriceEffect'],
    name: 'RoomScenicCard',
}
</script>