<template>
    <div class="room-type-1">
        <img :src="roomImage" class="room-type-img"/>
        <div class="rt-1-summary">
            <span class="rt-1-summary--roomTypeTitle">{{ roomTypeTitle }}</span>
            <span class="rt-1-summary--roomTypePrice">{{ roomTypePrice }}</span>
        </div>
        <span class="roomType-checkoutDetail--date">{{ checkoutDetailDate }} gun </span>
        <span class="roomType-checkoutDetail--person">{{ checkoutDetailAdultPerson }} yetiskin {{ checkoutDetailChildPerson }} cocuk</span>
    </div>
</template>
<script>
import RoomType1 from '@/assets/roomType-1.png';
import RoomType2 from '@/assets/roomType-2.png';
import RoomType3 from '@/assets/roomType-3.png';
import RoomScenic1 from '@/assets/room-scenic-1.png';
import RoomScenic2 from '@/assets/room-scenic-2.png';
import RoomScenic3 from '@/assets/room-scenic-3.png';
export default {
    props: ['roomImage', 'roomTypeTitle', 'roomTypePrice', 'checkoutDetailDate', 'checkoutDetailAdultPerson', 'checkoutDetailChildPerson'],
    name: 'RoomTypeCard',
        setup() {
        return {
            RoomType1, RoomType2, RoomType3, RoomScenic1, RoomScenic2, RoomScenic3
        };
    },
}
</script>