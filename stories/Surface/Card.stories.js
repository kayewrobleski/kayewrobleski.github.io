import React from 'react'

import Card from '../../src/components/surface/Card'
import CardImage from '../../src/components/surface/CardImage'
import CardContent from '../../src/components/surface/CardContent'
import Body1 from '../../src/components/typography/body/Body1'
import profile from '../../src/images/profile.jpeg'

export default {
    title: 'Surface|Card'
}

export const Default = () => (
    <Card height="250">
        <CardImage src={profile} height="250" width="250"/>
            <CardContent>
                <Body1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Eros donec ac odio tempor. Pulvinar pellentesque habitant morbi tristique 
                    senectus et netus. Id diam maecenas ultricies mi eget mauris pharetra et. Elementum nisi quis eleifend 
                    quam adipiscing vitae proin sagittis. Varius vel pharetra vel turpis. Nulla at volutpat diam ut. Cursus 
                    metus aliquam eleifend mi in nulla posuere. Tristique sollicitudin nibh sit amet commodo. At ultrices mi 
                    tempus imperdiet nulla malesuada.
                </Body1>
            </CardContent>
    </Card>
);